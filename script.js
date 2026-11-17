const followBtn = document.getElementById("followBtn");
let isFollowing = false;

followBtn.addEventListener("click", function () {
    isFollowing = !isFollowing;

    if (isFollowing) {
        followBtn.textContent = "Following ✓";
        followBtn.classList.add("following");
        alert("Thanks for following me!");
    } else {
        followBtn.textContent = "Follow Me";
        followBtn.classList.remove("following");
    }
});
