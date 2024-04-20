<script lang="ts" setup>
const activeDrag = ref(false);
const btnLeft = ref<HTMLDivElement | null>(null);
const btnRight = ref<HTMLDivElement | null>(null);
const tabMenu = ref<HTMLUListElement | null>(null);

function iconVisibility() {
  if (!tabMenu.value) return;
  if (!btnLeft.value) return;
  if (!btnRight.value) return;

  const scrollLeftValue = Math.ceil(tabMenu.value.scrollLeft);
  const scrollableWidth = tabMenu.value.scrollWidth - tabMenu.value.clientWidth;

  btnLeft.value.style.display = scrollLeftValue > 0 ? "flex" : "none";
  btnRight.value.style.display =
    scrollableWidth > scrollLeftValue ? "flex" : "none";
}

function handleClickBtnRight() {
  if (!tabMenu.value) return;
  tabMenu.value.scrollLeft += 150;
  iconVisibility();
}

function handleClickBtnLeft() {
  if (!tabMenu.value) return;
  tabMenu.value.scrollLeft -= 150;
  iconVisibility();
}

function calculateVisibilityButtons() {
  if (!tabMenu.value) return;
  if (!btnLeft.value) return;
  if (!btnRight.value) return;

  btnRight.value.style.display =
    tabMenu.value.scrollWidth > tabMenu.value.clientWidth ||
    tabMenu.value.scrollWidth >= window.innerWidth
      ? "flex"
      : "none";
  btnLeft.value.style.display =
    tabMenu.value.scrollWidth >= tabMenu.value.clientWidth ? "" : "none";

  const scrollLeftValue = Math.round(tabMenu.value.scrollLeft);

  btnLeft.value.style.display = scrollLeftValue > 0 ? "flex" : "none";
}

function handleDrag(drag: MouseEvent) {
  if (!tabMenu.value) return;
  if (!activeDrag.value) return;
  tabMenu.value.scrollLeft -= drag.movementX;
  iconVisibility();
  tabMenu.value.classList.add("dragging");
}

function toggleActiveDrag() {
  activeDrag.value = !activeDrag.value;
}

function handleMouseUp() {
  if (!tabMenu.value) return;
  toggleActiveDrag();
  tabMenu.value.classList.remove("dragging");
}

function handleMouseLeave() {
  if (activeDrag.value) {
    if (!tabMenu.value) return;
    toggleActiveDrag()
    tabMenu.value.classList.remove("dragging");
  }
}

onMounted(() => {
  calculateVisibilityButtons();
  window.addEventListener("resize", calculateVisibilityButtons);
});
</script>

<template>
  <div>
    <div class="tab-nav-bar">
      <div class="tab-navigation">
        <div ref="btnLeft" class="left-btn" @click="handleClickBtnLeft">
          <UIcon name="i-heroicons-arrow-small-left-solid" />
        </div>
        <div ref="btnRight" class="right-btn" @click="handleClickBtnRight">
          <UIcon name="i-heroicons-arrow-small-right-solid" />
        </div>
        <ul
          ref="tabMenu"
          class="tab-menu"
          @mousemove="handleDrag"
          @mousedown="toggleActiveDrag"
          @mouseup="handleMouseUp"
          @mouseleave="handleMouseLeave"
        >
          <li class="tab-btn active">React</li>
          <li class="tab-btn">Nuxt</li>
          <li class="tab-btn">Firebase</li>
          <li class="tab-btn">Vue</li>
          <li class="tab-btn">Next</li>
          <li class="tab-btn">Supabase</li>
          <li class="tab-btn">Prisma</li>
          <li class="tab-btn">GCP</li>
          <li class="tab-btn">GPT-4</li>
          <li class="tab-btn">GPT-4</li>
          <li class="tab-btn">GPT-4</li>
          <li class="tab-btn">GPT-4</li>
          <li class="tab-btn">GPT-4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-nav-bar {
  position: relative;
  margin: 65px 10px 40px 10px;
}

.tab-navigation {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
  margin: 0 auto;
}

.tab-menu {
  color: var(--text-color);
  list-style: none;
  background: var(--third-color);
  max-width: 800px;
  padding: 10px;
  white-space: nowrap;
  border-bottom: 1px solid var(--third-color);
  border-radius: 50px;
  box-shadow: var(--box-shadow);
  overflow-x: auto;
}

.tab-menu::-webkit-scrollbar {
  display: none;
}

.tab-menu.dragging {
  cursor: grab;
}

.tab-menu.dragging .tab-btn {
  pointer-events: none;
}

.tab-btn {
  color: var(--text-color);
  display: inline-block;
  font-size: 1em;
  font-weight: 400;
  margin: 0 2px;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s ease;
}

.tab-btn:hover {
  background: var(--first-color);
}

.tab-btn.active {
  background: var(--second-color);
}

.left-btn,
.right-btn {
  display: flex;
  height: 100%;
  align-items: center;
  position: absolute;
  font-size: 1.8em;
  padding: 10px;
  cursor: pointer;
  color: var(--text-color);
}

.left-btn {
  left: 0;
  background: linear-gradient(to left, transparent, var(--first-color) 80%);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: none;
}

.right-btn {
  right: 0;
  background: linear-gradient(to right, transparent, var(--first-color) 80%);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>
