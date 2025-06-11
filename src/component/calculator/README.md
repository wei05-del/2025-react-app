# MyCalculator 計算機元件說明

## 1. 程式架構

本計算機專案採用 React + Vite 架構，所有元件皆以 `My` 為前綴，並採用元件化設計，方便維護與擴充。

```
App.jsx
└── component/
    ├── MyCalculator.jsx      // 主計算機元件，整合所有功能
    ├── MyDisplay.jsx         // 顯示運算式與結果
    ├── MyKeypad.jsx          // 按鈕區，排列所有按鈕
    ├── MyButton.jsx          // 單一按鈕元件，數字/運算子/控制鍵
    ├── MyErrorMessage.jsx    // 顯示錯誤訊息
    ├── MyCalculator.css      // 所有計算機相關元件的外觀設定
    └── ... 其他元件
```

## 2. 各元件功能說明

- **MyCalculator**
  - 主元件，負責運算邏輯、狀態管理與整體排版。
  - 整合 MyDisplay、MyKeypad、MyErrorMessage。
  - 處理按鈕點擊、運算式解析、錯誤處理。
  - 外觀樣式統一由 MyCalculator.css 控制。

- **MyDisplay**
  - 顯示目前輸入的運算式與計算結果。
  - 支援自動換行與美觀排版。
  - 樣式由 my-calculator-display、expression、result className 控制。

- **MyKeypad**
  - 按鈕區，排列所有數字、運算子、控制鍵。
  - 依照常見計算機排列方式設計。
  - 每個按鈕都呼叫 MyButton。
  - 樣式由 my-calculator-keypad、my-calculator-keypad-row 控制。

- **MyButton**
  - 單一按鈕元件。
  - 根據 props 決定顯示內容與配色（數字、運算子、控制鍵不同顏色）。
  - 點擊時呼叫父元件傳入的 onClick。
  - 樣式由 my-calculator-btn 及 number/operator/control className 控制。

- **MyErrorMessage**
  - 顯示錯誤訊息（如除以零、運算式錯誤等）。
  - 無錯誤時不顯示。
  - 樣式由 my-calculator-error 控制。

## 3. 使用技術

- React 19 (Functional Components, Hooks)
- Vite (快速開發與建構工具)
- CSS in JS（元件內嵌樣式）與集中式 CSS（MyCalculator.css）
- 組件化設計，易於擴充與維護
- 支援即時運算、錯誤提示、響應式設計

## 4. 如何使用

1. 將 `MyCalculator` 元件匯入並放入你的 React 專案畫面中：
   ```jsx
   import MyCalculator from "./component/MyCalculator";
   ...
   <MyCalculator />
   ```
2. 按鈕支援滑鼠點擊，運算式與結果即時顯示。
3. 支援加、減、乘、除、清除、刪除、等號等功能。
4. 所有外觀設定集中於 `MyCalculator.css`，可直接修改此檔案調整整體風格。
