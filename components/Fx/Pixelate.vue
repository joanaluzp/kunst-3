<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
    <defs>
      <filter id="pixelate" x="0" y="0">
        <feFlood x="2" y="2" height="1" width="1" />
        <feComposite width="6" height="6" />
        <feTile result="tile" />
        <feComposite in="SourceGraphic" in2="tile" operator="in" />
        <feMorphology operator="dilate" radius="1" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="1 0" />
          <feFuncG type="table" tableValues="1 0" />
          <feFuncB type="table" tableValues="1 0" />
        </feComponentTransfer>
      </filter>
    </defs>
  </svg>
</template>
