// В этом файле будут собраны участки кода, которые пригодятся в верстке

// Данный код проверяет сколько в родителе элементов, и дается соответствующий класс

const itemsBlocks = document.querySelectorAll(".items__block"); // родитель

if (itemsBlocks.length) {
  itemsBlocks.forEach(itemsBlock => {
    const itemsBlocksItem = itemsBlock.querySelectorAll(".items__block-item").length; // элементы в родителе
    itemsBlock.classList.add(`items__block-item_${itemsBlocksItem}`); // соответствующий класс
  })
}

// Примерная структура кода в штмл

/* <div class="items">
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
</div> */

// Данный код проверяет сколько в родителе элементов, и даем соответствующий класс