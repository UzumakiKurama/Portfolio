const itemCallback = (entries) => {
     entries.forEach((entry) => {
          if (entry.isIntersecting) {
               entry.target.classList.add("animate");
               entry.target.classList.add("blur");
          }
     });
};
const itemOptions = {
     rootMargin: "-100px",
};

// Tools animations
const toolsHeading = document.getElementsByClassName("tools__heading");
const toolsListitem = document.getElementsByClassName("tools__list--item");

const toolsHeading_observer = new IntersectionObserver(
     itemCallback,
     itemOptions
);
const toolsListItem_observer = new IntersectionObserver(
     itemCallback,
     itemOptions
);

for (let i = 0; i < toolsHeading.length; i++) {
     toolsHeading_observer.observe(toolsHeading[i]);
}

for (let i = 0; i < toolsListitem.length; i++) {
     toolsListItem_observer.observe(toolsListitem[i]);
}

// Project animations

const item2 = document.getElementById("project-2");
const item3 = document.getElementById("project-3");

const item2Observer = new IntersectionObserver(itemCallback, itemOptions);
const item3Observer = new IntersectionObserver(itemCallback, itemOptions);

item2Observer.observe(item2);
item3Observer.observe(item3);
