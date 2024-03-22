<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    style="background: #212121; display: block; shape-rendering: auto;" width="200px" height="200px"
    viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FD4505" />
        <stop offset="33%" stop-color="#FDC6B3" />
        <stop offset="66%" stop-color="#D6C2FE" />
        <stop offset="100%" stop-color="#9D70FF" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="0" fill="none" stroke="url(#gradient)" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="2s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1"
        calcMode="spline" begin="0s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="2s" values="1;0" keyTimes="0;1"
        keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
    </circle>
    <circle cx="50" cy="50" r="0" fill="none" stroke="url(#gradient)" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="2s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1"
        calcMode="spline" begin="-1.5s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="2s" values="1;0" keyTimes="0;1"
        keySplines="0.2 0 0.8 1" calcMode="spline" begin="-1.5s"></animate>
    </circle>
  </svg></template>