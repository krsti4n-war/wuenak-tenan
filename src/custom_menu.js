/*
  Attributes:
    max: Specify maximum allowed active selections.

  Events:
    itemAdded: new item group was selected
    itemRemoved: selected item was removed
    
*/
class ItemGroup extends HTMLElement {
    constructor() {
        super();

        const maxActiveButtons = parseInt(
            this.hasAttribute("max") ? this.getAttribute("max") : 0
        );

        // Button group state
        let activeButtons = [];

        // Attach click listener to all button children
        Array.from(this.children).forEach((element) => {
            if (element.tagName !== "BUTTON") return;

            // Toggle active state on click event
            element.addEventListener("click", (event) => {
                if (activeButtons.includes(event.target))
                    activeButtons.splice(activeButtons.indexOf(event.target), 1);
                else if (activeButtons.length + 1 > maxActiveButtons) return;
                else activeButtons.push(event.target);

                event.target.classList.toggle("active");

                if (event.target.classList.contains("active"))
                    this.dispatchEvent(
                        new CustomEvent("itemAdded", { detail: event.target.textContent })
                    );
                else
                    this.dispatchEvent(
                        new CustomEvent("itemRemoved", { detail: event.target.textContent })
                    );
            });
        });
    }
}


(function () {
    customElements.define("item-group", ItemGroup);
})();


(function () {
    const food_options = Array.from(
        document.getElementsByClassName("food-option")
    );

    food_options.forEach((element) => {
        const item_container = document.getElementById("item-list");

        element.addEventListener("itemAdded", (e) => {
            const item_node = document.createElement('li');
            item_node.textContent = e.detail;
            item_container.appendChild(item_node);
        });

        element.addEventListener("itemRemoved", (e) => {
            const item_node = Array.prototype.find.call(item_container.children, elem => elem.textContent === e.detail);
            if (item_node)
                item_node.remove();
        });
    });
})();
