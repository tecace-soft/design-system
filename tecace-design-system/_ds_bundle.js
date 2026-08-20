/* @ds-bundle: {"format":4,"namespace":"TecAceDesignSystem_64e6de","components":[{"name":"Button","sourcePath":"components/action/Button.jsx"},{"name":"Chip","sourcePath":"components/action/Chip.jsx"},{"name":"ChipFilter","sourcePath":"components/action/ChipFilter.jsx"},{"name":"ChipMultiSelect","sourcePath":"components/action/ChipMultiSelect.jsx"},{"name":"FloatingActionButton","sourcePath":"components/action/FloatingActionButton.jsx"},{"name":"IconButton","sourcePath":"components/action/IconButton.jsx"},{"name":"TextButton","sourcePath":"components/action/TextButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ContentBadge","sourcePath":"components/display/ContentBadge.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"ListRow","sourcePath":"components/display/ListRow.jsx"},{"name":"SectionHeader","sourcePath":"components/display/SectionHeader.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"BottomNavigation","sourcePath":"components/navigation/BottomNavigation.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Category","sourcePath":"components/navigation/Category.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tab","sourcePath":"components/navigation/Tab.jsx"},{"name":"BottomSheet","sourcePath":"components/overlay/BottomSheet.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"AutoComplete","sourcePath":"components/selection/AutoComplete.jsx"},{"name":"Checkbox","sourcePath":"components/selection/Checkbox.jsx"},{"name":"DatePicker","sourcePath":"components/selection/DatePicker.jsx"},{"name":"Radio","sourcePath":"components/selection/Radio.jsx"},{"name":"SearchField","sourcePath":"components/selection/SearchField.jsx"},{"name":"Select","sourcePath":"components/selection/Select.jsx"},{"name":"Slider","sourcePath":"components/selection/Slider.jsx"},{"name":"Stepper","sourcePath":"components/selection/Stepper.jsx"},{"name":"Switch","sourcePath":"components/selection/Switch.jsx"},{"name":"TextField","sourcePath":"components/selection/TextField.jsx"},{"name":"ToggleIcon","sourcePath":"components/selection/ToggleIcon.jsx"}],"sourceHashes":{"components/action/Button.jsx":"bb7e464b9653","components/action/Chip.jsx":"a55b16d36a6b","components/action/ChipFilter.jsx":"629ff8f79a02","components/action/ChipMultiSelect.jsx":"74201cd21a09","components/action/FloatingActionButton.jsx":"a87ad69b4a6e","components/action/IconButton.jsx":"79923aa2a2ab","components/action/TextButton.jsx":"16745417dc93","components/brand/Logo.jsx":"cba76047198b","components/display/Accordion.jsx":"42eea6fac4e4","components/display/Avatar.jsx":"c2c900c8765f","components/display/Badge.jsx":"8b6cf623acb8","components/display/Card.jsx":"b31f0cb28b8a","components/display/ContentBadge.jsx":"6ae3b7972840","components/display/Divider.jsx":"8e0ec87de884","components/display/ListRow.jsx":"371ff1009941","components/display/SectionHeader.jsx":"6537ebb0f18d","components/display/Tag.jsx":"62a098731608","components/feedback/Alert.jsx":"d0f6aa631f30","components/feedback/Banner.jsx":"3aa0824acb09","components/feedback/EmptyState.jsx":"29fc6329a02d","components/feedback/ProgressBar.jsx":"558e00abe8e6","components/feedback/Skeleton.jsx":"efd66060072f","components/feedback/Spinner.jsx":"af9b05391bd1","components/feedback/Toast.jsx":"a5208b61c584","components/feedback/Tooltip.jsx":"ea9520eeefda","components/navigation/BottomNavigation.jsx":"dc8db219c68e","components/navigation/Breadcrumb.jsx":"5634f33d8a04","components/navigation/Category.jsx":"c5d17d66d06f","components/navigation/Menu.jsx":"7be49d1e3504","components/navigation/Pagination.jsx":"201bec618be0","components/navigation/SegmentedControl.jsx":"d95ba5658c0a","components/navigation/Tab.jsx":"0fb5f6883ae7","components/overlay/BottomSheet.jsx":"924172f81ac3","components/overlay/Modal.jsx":"66835bb81c6f","components/selection/AutoComplete.jsx":"8d1661eb385b","components/selection/Checkbox.jsx":"171225d0276d","components/selection/DatePicker.jsx":"4c922526cb90","components/selection/Radio.jsx":"2e8d3a180921","components/selection/SearchField.jsx":"356e55975449","components/selection/Select.jsx":"c0886d136b39","components/selection/Slider.jsx":"4792ba83d4b4","components/selection/Stepper.jsx":"a730e281d618","components/selection/Switch.jsx":"a1a72073d62b","components/selection/TextField.jsx":"f08943f55682","components/selection/ToggleIcon.jsx":"68d9dbeba692"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TecAceDesignSystem_64e6de = window.TecAceDesignSystem_64e6de || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/action/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Chip (Chip/Chip: Size × Variant × Active × Disable). Pill-shaped. */

const SIZES = {
  xs: {
    font: 12,
    lh: 1.334,
    ls: '0.025em',
    padX: 8,
    padY: 4,
    gap: 2,
    icon: 14
  },
  sm: {
    font: 13,
    lh: 1.385,
    ls: '0.019em',
    padX: 10,
    padY: 6,
    gap: 4,
    icon: 16
  },
  md: {
    font: 14,
    lh: 1.429,
    ls: '0.014em',
    padX: 12,
    padY: 7,
    gap: 4,
    icon: 18
  },
  lg: {
    font: 15,
    lh: 1.467,
    ls: '0.010em',
    padX: 14,
    padY: 9,
    gap: 6,
    icon: 20
  }
};
function Chip({
  label = '텍스트',
  size = 'md',
  variant = 'normal',
  // 'normal' | 'alternative'
  active = false,
  disable = false,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  let skin;
  if (disable) skin = {
    background: 'var(--fill-alternative, rgba(112,115,124,0.05))',
    color: 'rgba(55,56,60,0.28)',
    boxShadow: 'none'
  };else if (active) skin = {
    background: 'var(--primary-normal)',
    color: 'var(--static-white,#fff)',
    boxShadow: 'none'
  };else if (variant === 'alternative') skin = {
    background: 'var(--fill-normal, rgba(112,115,124,0.08))',
    color: 'var(--label-normal)',
    boxShadow: 'none'
  };else skin = {
    background: 'transparent',
    color: 'var(--label-normal)',
    boxShadow: 'inset 0 0 0 1px var(--line-normal, rgba(112,115,124,0.22))'
  };
  const iconBox = node => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, node);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disable,
    onClick: disable ? undefined : onClick,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      borderRadius: 1000,
      border: 'none',
      padding: `${s.padY}px ${s.padX}px`,
      cursor: disable ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: s.font,
      lineHeight: s.lh,
      letterSpacing: s.ls,
      whiteSpace: 'nowrap',
      transition: 'background-color .15s ease',
      outline: 'none',
      ...skin,
      ...style
    }
  }, rest), leadingIcon && iconBox(leadingIcon), /*#__PURE__*/React.createElement("span", null, label), trailingIcon && iconBox(trailingIcon));
}
Object.assign(__ds_scope, { Chip, __ds_default_components_action_Chip_4qlzyj: Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/Chip.jsx", error: String((e && e.message) || e) }); }

// components/action/ChipFilter.jsx
try { (() => {
const CH_DOWN = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 20 20",
  width: "100%",
  height: "100%",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 8l5 5 5-5",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const CH_UP = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 20 20",
  width: "100%",
  height: "100%",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12l5-5 5 5",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Filter chip — pill with a trailing chevron and optional selection count.
 * Sizes md/lg; states default / selected / disabled; `expand` flips the chevron.
 * Exact geometry transcribed from Figma "Chip/Filter".
 */
function ChipFilter({
  label = "텍스트",
  count,
  size = "md",
  state = "default",
  expand = false,
  onClick,
  className,
  style
}) {
  const md = size === "md";
  const disabled = state === "disabled" || state === "selected disabled";
  const selected = state === "selected" || state === "selected disabled";
  const border = disabled ? "rgb(244,244,245)" : selected ? "rgb(51,102,255)" : "rgb(225,226,228)";
  const textColor = disabled ? "rgb(220,220,220)" : "rgb(23,23,23)";
  const countColor = disabled ? "rgb(220,220,220)" : "rgb(51,102,255)";
  const fs = md ? 14 : 15;
  const lh = md ? 1.429 : 1.467;
  const ls = md ? "0.015em" : "0.010em";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    className: className,
    style: {
      width: "fit-content",
      border: 0,
      borderRadius: 999,
      boxShadow: `inset 0 0 0 1px ${border}`,
      background: "transparent",
      display: "inline-flex",
      flexDirection: "row",
      gap: md ? 4 : 6,
      padding: md ? "6px 12px" : "9px 12px 9px 16px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      cursor: disabled ? "default" : "pointer",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: fs,
      lineHeight: lh,
      letterSpacing: ls,
      color: textColor,
      whiteSpace: "nowrap"
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: fs,
      lineHeight: lh,
      letterSpacing: ls,
      color: countColor,
      whiteSpace: "nowrap"
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      height: md ? 12 : 16,
      width: md ? 18 : 20,
      flexShrink: 0,
      color: textColor,
      display: "inline-flex"
    }
  }, expand ? CH_UP : CH_DOWN));
}
Object.assign(__ds_scope, { ChipFilter, __ds_default_components_action_ChipFilter_xmuwy9: ChipFilter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/ChipFilter.jsx", error: String((e && e.message) || e) }); }

// components/action/ChipMultiSelect.jsx
try { (() => {
const CHECK = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 16 16",
  width: "100%",
  height: "100%",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3.5 8.5l3 3 6-6.5",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Multi-select chip — pill with a leading check, toggles selected.
 * Exact geometry transcribed from Figma "Chip/Multi-Select".
 */
function ChipMultiSelect({
  label = "텍스트",
  size = "md",
  state = "default",
  onClick,
  className,
  style
}) {
  const md = size === "md";
  const disabled = state === "disabled" || state === "selected disabled";
  const selected = state === "selected" || state === "selected disabled";
  const border = disabled ? "rgb(244,244,245)" : selected ? "rgb(51,102,255)" : "rgb(225,226,228)";
  const color = disabled ? "rgb(220,220,220)" : selected ? "rgb(51,102,255)" : "rgb(138,138,138)";
  const fs = md ? 14 : 15;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    className: className,
    style: {
      width: "fit-content",
      border: 0,
      borderRadius: 999,
      boxShadow: `inset 0 0 0 1px ${border}`,
      background: "transparent",
      display: "inline-flex",
      flexDirection: "row",
      gap: md ? 4 : 6,
      padding: md ? "6px 12px" : "9px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      cursor: disabled ? "default" : "pointer",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: md ? 12 : 16,
      width: md ? 16 : 18,
      flexShrink: 0,
      color,
      display: "inline-flex"
    }
  }, CHECK), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: fs,
      lineHeight: md ? 1.429 : 1.467,
      letterSpacing: md ? "0.015em" : "0.010em",
      color,
      whiteSpace: "nowrap"
    }
  }, label));
}
Object.assign(__ds_scope, { ChipMultiSelect, __ds_default_components_action_ChipMultiSelect_nwnq0m: ChipMultiSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/ChipMultiSelect.jsx", error: String((e && e.message) || e) }); }

// components/action/FloatingActionButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Floating Action Button (Button/Floating Action Button). */
function FloatingActionButton({
  icon,
  label,
  disable = false,
  onClick,
  className,
  style,
  ...rest
}) {
  const extended = !!label;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disable,
    onClick: disable ? undefined : onClick,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: 56,
      minWidth: 56,
      padding: extended ? '0 20px' : 0,
      borderRadius: extended ? 16 : 1000,
      border: 'none',
      cursor: disable ? 'default' : 'pointer',
      background: disable ? 'var(--interaction-disable)' : 'var(--primary-normal)',
      color: disable ? 'rgba(55,56,60,0.28)' : 'var(--static-white,#fff)',
      boxShadow: '0 4px 16px rgba(23,23,25,0.16)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      outline: 'none',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), extended && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { FloatingActionButton, __ds_default_components_action_FloatingActionButton_19xlfo5: FloatingActionButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/FloatingActionButton.jsx", error: String((e && e.message) || e) }); }

// components/action/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — IconButton (Button/Icon Button: Normal | Background | Outlined). */

const SIZES = {
  sm: {
    box: 32,
    icon: 20,
    radius: 8
  },
  md: {
    box: 40,
    icon: 22,
    radius: 10
  },
  lg: {
    box: 48,
    icon: 24,
    radius: 12
  }
};
function IconButton({
  icon,
  variant = 'normal',
  // 'normal' | 'background' | 'outlined'
  size = 'md',
  disable = false,
  'aria-label': ariaLabel = 'button',
  onClick,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: s.box,
    height: s.box,
    borderRadius: variant === 'background' ? 1000 : s.radius,
    border: 'none',
    background: 'transparent',
    cursor: disable ? 'default' : 'pointer',
    color: disable ? 'var(--label-disable, rgba(55,56,60,0.28))' : 'var(--label-normal)',
    transition: 'background-color .15s ease',
    padding: 0,
    outline: 'none'
  };
  const skin = variant === 'background' ? {
    background: 'var(--fill-normal, rgba(112,115,124,0.08))'
  } : variant === 'outlined' ? {
    boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.16)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disable,
    onClick: disable ? undefined : onClick,
    className: className,
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton, __ds_default_components_action_IconButton_dx24rw: IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/action/TextButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — TextButton (Button/Text): borderless text-only action. */
const SIZES = {
  sm: {
    font: 13,
    lh: 1.385
  },
  md: {
    font: 14,
    lh: 1.429
  },
  lg: {
    font: 16,
    lh: 1.5
  }
};
function TextButton({
  label = '텍스트',
  size = 'md',
  color = 'primary',
  disable = false,
  underline = false,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const c = disable ? 'var(--label-disable, rgba(55,56,60,0.16))' : color === 'assistive' ? 'var(--label-alternative, rgba(55,56,60,0.61))' : color === 'neutral' ? 'var(--label-normal)' : 'var(--primary-normal)';
  const box = n => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.font + 4,
      height: s.font + 4,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, n);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disable,
    onClick: disable ? undefined : onClick,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: disable ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.font,
      lineHeight: s.lh,
      color: c,
      textDecoration: underline ? 'underline' : 'none',
      textUnderlineOffset: 2,
      outline: 'none',
      ...style
    }
  }, rest), leadingIcon && box(leadingIcon), /*#__PURE__*/React.createElement("span", null, label), trailingIcon && box(trailingIcon));
}
Object.assign(__ds_scope, { TextButton, __ds_default_components_action_TextButton_rojzwo: TextButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/TextButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const SYM = [["19.217 11.039", "M 0 10.961 L 6.438 0 L 12.759 11.039 L 0 10.961 Z", "rgb(28,129,191)"], ["0 21.942", "M 0 10.961 L 6.438 0 L 12.759 11.039 L 0 10.961 Z", "rgb(16,73,125)"], ["12.896 10.961", "M 12.759 0.078 L 6.321 11.039 L 0 0 L 12.759 0.058 L 12.759 0.078 Z", "rgb(255,255,255)"], ["12.779 32.961", "M 12.759 0.078 L 6.321 11.039 L 0 0 L 12.759 0.058 L 12.759 0.078 Z", "rgb(18,60,99)"], ["6.438 10.981", "M 0 10.961 L 6.438 0 L 12.759 11.039 L 0 10.981 L 0 10.961 Z", "rgb(148,212,242)"], ["25.538 22.078", "M 0 10.961 L 6.438 0 L 12.759 11.039 L 0 10.961 Z", "rgb(16,73,125)"], ["19.217 22", "M 12.759 0.078 L 6.321 11.039 L 0 0 L 12.759 0.078 Z", "rgb(10,113,179)"], ["0.117 10.903", "M 12.759 0.058 L 6.321 11.019 L 0 0 L 12.759 0.058 Z", "rgb(11,105,166)"], ["12.759 22", "M 0 10.961 L 6.438 0 L 12.759 11.039 L 0 10.981 L 0 10.961 Z", "rgb(36,151,208)"], ["12.877 0", "M 0 10.961 L 6.458 0 L 12.779 11.039 L 0.02 10.981 L 0 10.961 Z", "rgb(28,129,191)"], ["6.458 21.922", "M 12.759 0.078 L 6.321 11.039 L 0 0 L 12.759 0.058 L 12.759 0.078 Z", "rgb(60,176,222)"], ["25.655 11.019", "M 12.759 0.078 L 6.321 11.039 L 0 0 L 12.759 0.078 Z", "rgb(11,105,166)"], ["0.117 0", "M 0 10.903 L 19.217 0 L 12.779 10.961 L 0.02 10.903 L 0 10.903 Z", "rgb(11,105,166)"], ["0 10.903", "M 0.117 0 L 0 22 L 6.438 11.039 L 0.117 0 Z", "rgb(16,73,125)"], ["0 32.883", "M 0 0.019 L 19.1 11.117 L 12.779 0.078 L 0.02 0 L 0 0.019 Z", "rgb(18,60,99)"], ["19.1 33.019", "M 0 10.981 L 19.217 0.078 L 6.458 0 L 0.02 10.961 L 0 10.981 Z", "rgb(16,73,125)"], ["31.976 11.097", "M 6.321 22 L 6.438 0 L 0 10.961 L 6.321 22 Z", "rgb(11,105,166)"], ["19.334 0", "M 19.08 11.097 L 0 0 L 6.321 11.039 L 19.08 11.117 L 19.08 11.097 Z", "rgb(28,129,191)"]];
const WM = [["0 0", "M 24.96 0 L 0.687 0 L 0 4.527 L 9.327 4.527 L 9.327 28.662 L 16.182 28.662 L 16.182 4.527 L 25.509 4.527 L 24.96 0 Z"], ["20.298 6.993", "M 20.16 0 L 5.073 0 C 1.782 0 0 1.92 0 5.487 L 0 15.636 C 0 19.476 1.782 21.669 5.073 21.669 L 25.232 21.669 L 25.232 17.829 L 8.363 17.829 C 7.542 17.829 6.993 17.691 6.854 17.556 C 6.716 17.422 6.443 16.869 6.443 15.775 L 6.443 12.622 L 25.232 12.622 L 25.232 5.491 C 25.232 1.789 23.585 0.004 20.16 0.004 L 20.16 0 Z M 18.923 9.189 L 6.443 9.189 L 6.443 5.898 C 6.443 4.8 6.582 4.389 6.854 4.116 C 7.127 3.844 7.542 3.706 8.363 3.706 L 17.003 3.706 C 17.691 3.706 18.236 3.844 18.512 4.116 C 18.651 4.255 18.923 4.804 18.923 5.898 L 18.923 9.189 Z"], ["47.588 6.858", "M 0 6.033 L 0 15.771 C 0 19.611 1.92 21.942 5.073 21.942 L 21.12 21.942 L 21.12 17.964 L 8.229 17.964 C 7.269 17.964 6.858 17.691 6.72 17.553 C 6.582 17.414 6.309 16.865 6.309 15.771 L 6.309 6.033 C 6.447 4.934 6.582 4.524 6.72 4.251 C 6.993 3.978 7.407 3.84 8.229 3.84 L 21.12 3.84 L 21.12 0 L 5.073 0 C 1.92 0 0 2.193 0 6.033 Z"], ["104.228 6.72", "M 0 5.487 L 0 15.909 C 0 19.749 1.92 22.08 5.073 22.08 L 21.665 22.08 L 21.665 18.102 L 8.363 18.102 C 7.676 18.102 7.131 17.964 6.854 17.691 C 6.716 17.553 6.443 17.004 6.443 15.909 L 6.443 6.171 C 6.582 5.073 6.716 4.524 6.854 4.389 C 7.127 4.116 7.542 3.978 8.363 3.978 L 21.665 3.978 L 21.665 0 L 5.073 0 C 1.782 0 0 1.92 0 5.487 Z"], ["128.365 6.72", "M 20.16 0 L 5.073 0 C 1.782 0 0 1.92 0 5.487 L 0 15.909 C 0 19.749 1.92 22.08 5.073 22.08 L 25.094 22.08 L 25.094 18.102 L 8.363 18.102 C 7.676 18.102 7.131 17.964 6.854 17.691 C 6.716 17.553 6.443 17.004 6.443 15.909 L 6.443 12.756 L 25.232 12.756 L 25.232 5.487 C 25.232 1.92 23.451 0 20.16 0 Z M 18.923 9.462 L 6.443 9.462 L 6.443 6.171 C 6.443 5.073 6.582 4.662 6.854 4.389 C 7.127 4.116 7.542 3.978 8.363 3.978 L 17.003 3.978 C 17.691 3.978 18.236 4.116 18.512 4.389 C 18.651 4.527 18.923 5.076 18.923 6.171 L 18.923 9.462 Z"], ["70.766 0.138", "M 12.203 0 L 12.614 0.411 C 13.302 1.098 13.302 1.509 13.302 1.644 C 13.302 1.644 13.302 1.782 12.891 2.465 C 8.64 11.105 0.684 27.564 0.411 27.974 L 0 28.524 L 5.898 28.524 L 10.011 19.745 L 21.258 19.745 L 25.236 28.658 L 33.054 28.658 L 20.16 0 L 12.207 0 L 12.203 0 Z M 11.382 16.454 L 15.771 7.265 L 19.749 16.454 L 11.382 16.454 Z"]];
function Symbol({
  size
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * (44 / 38.414),
    viewBox: "0 0 38.414 44",
    fill: "none",
    style: {
      display: "block",
      flexShrink: 0
    }
  }, SYM.map(([t, d, c], i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    transform: `translate(${t})`,
    d: d,
    fill: c
  })));
}
function Wordmark({
  height,
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    height: height,
    width: height * (153.598 / 28.8),
    viewBox: "0 0 153.598 28.8",
    fill: "none",
    style: {
      display: "block",
      flexShrink: 0
    }
  }, WM.map(([t, d], i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    transform: `translate(${t})`,
    d: d,
    fill: color
  })));
}

/** TecAce brand logo — faceted gem symbol, wordmark, or horizontal lockup. */
function Logo({
  variant = "lockup",
  size = 32,
  color = "#213260",
  className,
  style
}) {
  if (variant === "symbol") {
    return /*#__PURE__*/React.createElement("span", {
      className: className,
      style: {
        display: "inline-flex",
        ...style
      }
    }, /*#__PURE__*/React.createElement(Symbol, {
      size: size
    }));
  }
  if (variant === "wordmark") {
    return /*#__PURE__*/React.createElement("span", {
      className: className,
      style: {
        display: "inline-flex",
        ...style
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      height: size,
      color: color
    }));
  }
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.4,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Symbol, {
    size: size
  }), /*#__PURE__*/React.createElement(Wordmark, {
    height: size * 0.66,
    color: color
  }));
}
Object.assign(__ds_scope, { Logo, __ds_default_components_brand_Logo_1q8yv4x: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
/* TecAce — Accordion: expand/collapse disclosure rows. */
function Accordion({
  items = [],
  multiple = false,
  className,
  style
}) {
  const [open, setOpen] = React.useState({});
  const toggle = i => setOpen(o => multiple ? {
    ...o,
    [i]: !o[i]
  } : {
    [i]: !o[i]
  });
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((it, i) => {
    const on = !!open[i];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        boxShadow: 'inset 0 -1px 0 var(--line-normal, rgba(112,115,124,0.12))'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '16px 4px',
        textAlign: 'left',
        outline: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1.5,
        color: 'var(--label-normal)'
      }
    }, it.title), /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform .2s ease',
        color: 'var(--label-alternative,#8a8d94)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 4px 16px',
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--label-neutral, rgba(46,47,51,0.88))'
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion, __ds_default_components_display_Accordion_x152tt: Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Avatar (Avatar/Avatar): Person or Company, sizes, image or placeholder. */
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  '2xl': 80
};
function Avatar({
  src,
  alt = '',
  name = '',
  variant = 'person',
  size = 'md',
  className,
  style,
  ...rest
}) {
  const px = SIZES[size] || (typeof size === 'number' ? size : 40);
  const radius = variant === 'company' ? Math.round(px * 0.28) : 1000;
  const initials = name ? name.trim().slice(0, 2) : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: radius,
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--fill-normal, rgba(112,115,124,0.08))',
      color: 'var(--label-alternative, #8a8d94)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: px * 0.38,
      boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.10)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials ? initials : /*#__PURE__*/React.createElement("svg", {
    width: px * 0.6,
    height: px * 0.6,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.7-8 6v1h16v-1c0-3.3-3.6-6-8-6z"
  })));
}

/* Avatar/Avatar Group: overlapping stack with optional +N overflow. */
function AvatarGroup({
  avatars = [],
  size = 'md',
  max = 4,
  className,
  style
}) {
  const px = SIZES[size] || 40;
  const shown = avatars.slice(0, max);
  const extra = avatars.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, shown.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -px * 0.3,
      boxShadow: '0 0 0 2px var(--background-normal-normal,#fff)',
      borderRadius: 1000
    }
  }, /*#__PURE__*/React.createElement(Avatar, _extends({}, a, {
    size: size
  })))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -px * 0.3,
      width: px,
      height: px,
      borderRadius: 1000,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--fill-strong, rgba(112,115,124,0.16))',
      color: 'var(--label-normal)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: px * 0.34,
      boxShadow: '0 0 0 2px var(--background-normal-normal,#fff)'
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup, __ds_default_components_display_Avatar_1dmo83i: Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/* TecAce — Badge (Badge/Push): dot or count notification badge. */
function Badge({
  count,
  dot = false,
  max = 99,
  color = 'var(--status-negative, rgb(232,48,52))',
  className,
  style,
  children
}) {
  if (children == null) {
    // standalone badge
    if (dot) return /*#__PURE__*/React.createElement("span", {
      className: className,
      style: {
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: 1000,
        background: color,
        ...style
      }
    });
    const text = typeof count === 'number' && count > max ? `${max}+` : count;
    return /*#__PURE__*/React.createElement("span", {
      className: className,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 18,
        height: 18,
        padding: '0 5px',
        borderRadius: 1000,
        background: color,
        color: '#fff',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 11,
        lineHeight: 1,
        ...style
      }
    }, text);
  }
  // wrapper: anchor badge to top-right of children
  const text = typeof count === 'number' && count > max ? `${max}+` : count;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate(35%,-35%)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: dot ? 8 : 18,
      height: dot ? 8 : 18,
      padding: dot ? 0 : '0 5px',
      borderRadius: 1000,
      background: color,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      lineHeight: 1,
      boxShadow: '0 0 0 2px var(--background-normal-normal,#fff)'
    }
  }, dot ? '' : text));
}
Object.assign(__ds_scope, { Badge, __ds_default_components_display_Badge_1ieegi: Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Card (Card/Card). radius 16, outlined or elevated. */
function Card({
  variant = 'outlined',
  padding = 20,
  onClick,
  className,
  style,
  children,
  ...rest
}) {
  const skin = variant === 'elevated' ? {
    boxShadow: '0 1px 2px rgba(0,0,0,0.03), 0 4px 16px rgba(23,23,25,0.06)'
  } : {
    boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.22)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: className,
    style: {
      borderRadius: 16,
      background: 'var(--background-elevated-normal, #fff)',
      padding,
      boxSizing: 'border-box',
      cursor: onClick ? 'pointer' : 'default',
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, __ds_default_components_display_Card_4cna3d: Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ContentBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Content Badge (Content Badge/Content Badge): inline status/label pill.
   Variant (weak fill / solid) × Size × semantic Color. */

const SIZES = {
  sm: {
    font: 11,
    padX: 6,
    padY: 2,
    radius: 4
  },
  md: {
    font: 12,
    padX: 8,
    padY: 3,
    radius: 5
  },
  lg: {
    font: 13,
    padX: 10,
    padY: 4,
    radius: 6
  }
};
const COLORS = {
  primary: {
    fg: 'var(--primary-normal)',
    bg: 'var(--accent-background-blue, rgb(238,246,255))'
  },
  neutral: {
    fg: 'var(--label-neutral, rgba(46,47,51,0.88))',
    bg: 'var(--fill-normal, rgba(112,115,124,0.08))'
  },
  positive: {
    fg: 'var(--status-positive, rgb(10,190,92))',
    bg: 'rgba(10,190,92,0.10)'
  },
  negative: {
    fg: 'var(--status-negative, rgb(232,48,52))',
    bg: 'rgba(232,48,52,0.10)'
  },
  cautionary: {
    fg: 'var(--status-cautionary, rgb(255,153,10))',
    bg: 'rgba(255,153,10,0.12)'
  }
};
function ContentBadge({
  label = '텍스트',
  size = 'md',
  color = 'primary',
  variant = 'weak',
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const c = COLORS[color] || COLORS.primary;
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: s.radius,
      padding: `${s.padY}px ${s.padX}px`,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.font,
      lineHeight: 1.334,
      background: solid ? c.fg : c.bg,
      color: solid ? '#fff' : c.fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), label);
}
Object.assign(__ds_scope, { ContentBadge, __ds_default_components_display_ContentBadge_4bzpgt: ContentBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ContentBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
/* TecAce — Divider (Basic/Divider). Horizontal or vertical hairline. */
function Divider({
  vertical = false,
  thickness = 1,
  inset = 0,
  className,
  style
}) {
  const line = 'var(--line-normal, rgba(112,115,124,0.16))';
  return vertical ? /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-block',
      width: thickness,
      alignSelf: 'stretch',
      background: line,
      margin: `${inset}px 0`,
      ...style
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      height: thickness,
      width: '100%',
      background: line,
      margin: `0 ${inset}px`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider, __ds_default_components_display_Divider_1o50ypy: Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/ListRow.jsx
try { (() => {
/* TecAce — ListRow (List Cell/Resource): leading + title/description + trailing. */
function ListRow({
  leading = null,
  title,
  description,
  trailing = null,
  onClick,
  divider = false,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      boxShadow: divider ? 'inset 0 -1px 0 var(--line-normal, rgba(112,115,124,0.12))' : 'none',
      ...style
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      display: 'inline-flex'
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--label-normal)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.385,
      color: 'var(--label-alternative, #8a8d94)',
      marginTop: 2
    }
  }, description)), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      color: 'var(--label-alternative, #8a8d94)'
    }
  }, trailing));
}
Object.assign(__ds_scope, { ListRow, __ds_default_components_display_ListRow_hv1q9f: ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeader.jsx
try { (() => {
/* TecAce — SectionHeader (Section Header/Section Header): title + optional action. */
function SectionHeader({
  title,
  description,
  actionLabel,
  onAction,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '20px 16px 12px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.012em',
      color: 'var(--label-normal)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--label-alternative, #8a8d94)',
      marginTop: 4
    }
  }, description)), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      flexShrink: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--label-alternative, #8a8d94)',
      outline: 'none'
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { SectionHeader, __ds_default_components_display_SectionHeader_n56s8t: SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/* TecAce — Tag: labelled token, optional removable, optional leading dot. */
function Tag({
  label = '텍스트',
  dotColor,
  onRemove,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 10px',
      borderRadius: 8,
      background: 'var(--fill-normal, rgba(112,115,124,0.08))',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.385,
      color: 'var(--label-normal)',
      ...style
    }
  }, dotColor && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 1000,
      background: dotColor,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, label), onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "\uC0AD\uC81C",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      width: 14,
      height: 14,
      color: 'var(--label-alternative,#8a8d94)',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag, __ds_default_components_display_Tag_1fsh53v: Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
/* TecAce — Banner: inline info/status callout (weak-fill), semantic colors. */
const C = {
  info: {
    fg: 'var(--primary-normal)',
    bg: 'var(--blue-95,rgb(238,246,255))'
  },
  positive: {
    fg: 'var(--status-positive,rgb(10,190,92))',
    bg: 'rgba(10,190,92,0.10)'
  },
  negative: {
    fg: 'var(--status-negative,rgb(232,48,52))',
    bg: 'rgba(232,48,52,0.10)'
  },
  cautionary: {
    fg: 'var(--status-cautionary,rgb(225,138,15))',
    bg: 'rgba(225,138,15,0.12)'
  }
};
function Banner({
  title,
  message,
  color = 'info',
  icon = null,
  onClose,
  className,
  style
}) {
  const c = C[color] || C.info;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "status",
    style: {
      display: 'flex',
      gap: 10,
      padding: '12px 14px',
      borderRadius: 12,
      background: c.bg,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      color: c.fg,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.429,
      color: 'var(--label-normal)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--label-neutral, rgba(46,47,51,0.88))',
      marginTop: title ? 2 : 0
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\uB2EB\uAE30",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--label-alternative,#8a8d94)',
      padding: 0,
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Banner, __ds_default_components_feedback_Banner_2q95tw: Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/* TecAce — ProgressBar: linear determinate/indeterminate track. */
function ProgressBar({
  value = 0,
  indeterminate = false,
  height = 6,
  color = 'var(--primary-normal)',
  className,
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "progressbar",
    style: {
      width: '100%',
      height,
      borderRadius: 100,
      overflow: 'hidden',
      background: 'var(--fill-normal, rgba(112,115,124,0.08))',
      position: 'relative',
      ...style
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '40%',
      borderRadius: 100,
      background: color,
      animation: 'ta-prog 1.2s ease-in-out infinite'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct + '%',
      borderRadius: 100,
      background: color,
      transition: 'width .3s ease'
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes ta-prog{0%{left:-40%}100%{left:100%}}'));
}
Object.assign(__ds_scope, { ProgressBar, __ds_default_components_feedback_ProgressBar_1i5r454: ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/* TecAce — Skeleton: shimmering placeholder (Card Skeleton=True state). */
function Skeleton({
  variant = 'line',
  width = '100%',
  height,
  radius,
  className,
  style
}) {
  const h = height != null ? height : variant === 'circle' ? 40 : variant === 'title' ? 20 : 14;
  const w = variant === 'circle' ? h : width;
  const r = radius != null ? radius : variant === 'circle' ? 1000 : variant === 'rect' ? 12 : 6;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-block',
      width: w,
      height: h,
      borderRadius: r,
      background: 'linear-gradient(90deg, rgba(112,115,124,0.08) 25%, rgba(112,115,124,0.16) 37%, rgba(112,115,124,0.08) 63%)',
      backgroundSize: '400% 100%',
      animation: 'ta-shimmer 1.4s ease infinite',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ta-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}'));
}
Object.assign(__ds_scope, { Skeleton, __ds_default_components_feedback_Skeleton_wgrhzn: Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/* TecAce — Circular loading spinner (Circular/Circular). */
function Spinner({
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  className,
  style
}) {
  const s = typeof size === 'number' ? `${size}px` : size;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    role: "progressbar",
    "aria-label": "Loading",
    style: {
      display: 'inline-flex',
      width: s,
      height: s,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      animation: 'ta-spin 0.8s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    strokeOpacity: "0.2",
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes ta-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Spinner, __ds_default_components_feedback_Spinner_10l44jx: Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/action/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Button (Button/Button family: variant × color × size × iconOnly × disable).
   Exact geometry transcribed from Figma. */

const SIZES = {
  lg: {
    radius: 12,
    padY: 12,
    padX: 28,
    font: 16,
    lh: 1.5,
    ls: '0.006em',
    gap: 6,
    icon: 20,
    iconPad: 12
  },
  md: {
    radius: 10,
    padY: 9,
    padX: 20,
    font: 15,
    lh: 1.467,
    ls: '0.010em',
    gap: 5,
    icon: 18,
    iconPad: 10
  },
  sm: {
    radius: 8,
    padY: 7,
    padX: 14,
    font: 13,
    lh: 1.385,
    ls: '0.019em',
    gap: 4,
    icon: 16,
    iconPad: 7
  }
};
function Button({
  label = '텍스트',
  variant = 'solid',
  // 'solid' | 'outlined'
  color = 'primary',
  // 'primary' | 'assistive'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  iconOnly = false,
  disable = false,
  loading = false,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    borderRadius: s.radius,
    border: 'none',
    cursor: disable ? 'default' : 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.font,
    lineHeight: s.lh,
    letterSpacing: s.ls,
    padding: iconOnly ? s.iconPad : `${s.padY}px ${s.padX}px`,
    boxSizing: 'border-box',
    transition: 'filter .15s ease, background-color .15s ease',
    whiteSpace: 'nowrap',
    background: 'transparent',
    outline: 'none'
  };
  let skin;
  if (disable) {
    skin = variant === 'outlined' ? {
      background: 'transparent',
      boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.16)',
      color: 'rgba(55,56,60,0.16)'
    } : {
      background: 'var(--interaction-disable)',
      color: 'rgba(55,56,60,0.28)'
    };
  } else if (variant === 'outlined') {
    skin = {
      background: 'transparent',
      boxShadow: 'inset 0 0 0 1px rgba(112,115,124,0.16)',
      color: color === 'assistive' ? 'var(--label-normal)' : 'var(--primary-normal)'
    };
  } else if (color === 'assistive') {
    skin = {
      background: 'rgba(112,115,124,0.08)',
      backdropFilter: 'blur(64px)',
      color: 'rgba(46,47,51,0.88)',
      fontWeight: 500
    };
  } else {
    skin = {
      background: 'var(--primary-normal)',
      color: 'var(--static-white,#fff)'
    };
  }
  const iconBox = node => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, node);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disable ? undefined : onClick,
    disabled: disable,
    className: className,
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest), loading && iconBox(/*#__PURE__*/React.createElement(__ds_scope.Spinner, {
    size: s.icon - 2
  })), !loading && leadingIcon && iconBox(leadingIcon), !iconOnly && !loading && /*#__PURE__*/React.createElement("span", null, label), iconOnly && !loading && !leadingIcon && iconBox(trailingIcon), !loading && trailingIcon && !iconOnly && iconBox(trailingIcon));
}
Object.assign(__ds_scope, { Button, __ds_default_components_action_Button_1adh3ab: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/* TecAce — Alert (Alert/Alert): modal dialog with title, body, and 1–2 actions. */
function Alert({
  title = '제목',
  description,
  primaryLabel = '확인',
  secondaryLabel,
  onPrimary,
  onSecondary,
  layout = 'horizontal',
  // action layout: 'horizontal' | 'vertical'
  className,
  style
}) {
  const vertical = layout === 'vertical';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "alertdialog",
    style: {
      width: 320,
      maxWidth: '100%',
      borderRadius: 20,
      background: 'var(--background-elevated-normal,#fff)',
      boxShadow: '0 8px 28px rgba(23,23,25,0.16)',
      padding: 24,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.445,
      letterSpacing: '-0.002em',
      color: 'var(--label-normal)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.467,
      color: 'var(--label-neutral, rgba(46,47,51,0.88))'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      gap: 8,
      marginTop: 24
    }
  }, secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    label: secondaryLabel,
    variant: "outlined",
    color: "assistive",
    size: "lg",
    onClick: onSecondary,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    label: primaryLabel,
    variant: "solid",
    color: "primary",
    size: "lg",
    onClick: onPrimary,
    style: {
      flex: 1
    }
  })));
}
Object.assign(__ds_scope, { Alert, __ds_default_components_feedback_Alert_s1ujgm: Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/* TecAce — EmptyState: centered icon + title + description + optional action. */
function EmptyState({
  icon = null,
  title = '결과가 없어요',
  description,
  actionLabel,
  onAction,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 8,
      padding: '40px 24px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      color: 'var(--label-disable, rgba(55,56,60,0.28))',
      marginBottom: 4
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.412,
      color: 'var(--label-normal)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'var(--label-alternative, #8a8d94)',
      maxWidth: 280
    }
  }, description), actionLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    label: actionLabel,
    variant: "outlined",
    color: "assistive",
    onClick: onAction
  })));
}
Object.assign(__ds_scope, { EmptyState, __ds_default_components_feedback_EmptyState_biap9a: EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/* TecAce — Toast (Toast/Toast): transient dark snackbar with optional action. */
function Toast({
  message = '텍스트',
  actionLabel,
  onAction,
  leadingIcon = null,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      maxWidth: 512,
      padding: '14px 16px',
      borderRadius: 12,
      background: 'rgba(23,23,25,0.92)',
      backdropFilter: 'blur(8px)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.24)',
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.467
    }
  }, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--primary-normal-light, rgb(119,175,255))',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      padding: 0,
      flexShrink: 0,
      outline: 'none'
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { Toast, __ds_default_components_feedback_Toast_sfbpi1: Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/* TecAce — Tooltip (Bubble): small pointer label. Static presentation component. */
const ARROW = 6;
function Tooltip({
  label = '텍스트',
  placement = 'top',
  className,
  style
}) {
  const bubble = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--label-normal, rgb(23,23,25))',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.385,
      letterSpacing: '0.019em',
      padding: '6px 10px',
      borderRadius: 8,
      whiteSpace: 'nowrap'
    }
  }, label);
  const arrowStyle = {
    top: {
      bottom: -ARROW + 1,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    },
    bottom: {
      top: -ARROW + 1,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    },
    left: {
      right: -ARROW + 1,
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)'
    },
    right: {
      left: -ARROW + 1,
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, bubble, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: ARROW * 2,
      height: ARROW * 2,
      background: 'var(--label-normal, rgb(23,23,25))',
      ...arrowStyle
    }
  }));
}
Object.assign(__ds_scope, { Tooltip, __ds_default_components_feedback_Tooltip_1lex2m1: Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNavigation.jsx
try { (() => {
/* TecAce — Bottom Navigation (Bottom Navigation/Bottom Navigation): mobile tab bar. */
function BottomNavigation({
  items = [],
  value,
  onChange,
  className,
  style
}) {
  const active = value ?? (items[0] && (items[0].value ?? items[0].label));
  return /*#__PURE__*/React.createElement("nav", {
    className: className,
    style: {
      display: 'flex',
      alignItems: 'stretch',
      width: '100%',
      background: 'var(--background-normal-normal,#fff)',
      boxShadow: 'inset 0 1px 0 var(--line-normal, rgba(112,115,124,0.16))',
      padding: '8px 8px 12px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((it, i) => {
    const v = it.value ?? it.label ?? i;
    const isActive = v === active;
    const color = isActive ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)';
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onChange && onChange(v),
      style: {
        flex: 1,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '4px 0',
        outline: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        color
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: isActive ? 600 : 500,
        lineHeight: 1.273,
        letterSpacing: '0.031em',
        color
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNavigation, __ds_default_components_navigation_BottomNavigation_1b8y84e: BottomNavigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNavigation.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/* TecAce — Breadcrumb: path trail with chevron separators. */
function Breadcrumb({
  items = [],
  onNavigate,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: className,
    "aria-label": "breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: last,
      onClick: () => !last && onNavigate && onNavigate(it.value ?? label, i),
      style: {
        border: 'none',
        background: 'transparent',
        padding: '2px 4px',
        cursor: last ? 'default' : 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: last ? 600 : 500,
        fontSize: 14,
        lineHeight: 1.429,
        color: last ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)',
        outline: 'none'
      }
    }, label), !last && /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        color: 'var(--label-disable, rgba(55,56,60,0.28))'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb, __ds_default_components_navigation_Breadcrumb_1j6vgds: Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Category.jsx
try { (() => {
/* TecAce — Category (Category/Category): scrollable row of selectable filter chips. */
const SIZES = {
  sm: {
    font: 13,
    padX: 12,
    padY: 7
  },
  md: {
    font: 14,
    padX: 14,
    padY: 8
  },
  lg: {
    font: 15,
    padX: 16,
    padY: 10
  }
};
function Category({
  items = [],
  value,
  onChange,
  size = 'md',
  className,
  style
}) {
  const s = SIZES[size] || SIZES.md;
  const active = value ?? (items[0] && (items[0].value ?? items[0].label ?? items[0]));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      fontFamily: 'var(--font-sans)',
      scrollbarWidth: 'none',
      ...style
    }
  }, items.map((it, i) => {
    const label = it.label ?? it;
    const v = it.value ?? label;
    const isActive = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onChange && onChange(v),
      style: {
        flexShrink: 0,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 1000,
        padding: `${s.padY}px ${s.padX}px`,
        fontFamily: 'var(--font-sans)',
        fontWeight: isActive ? 600 : 500,
        fontSize: s.font,
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        transition: 'background-color .15s ease',
        outline: 'none',
        background: isActive ? 'var(--label-normal, rgb(23,23,25))' : 'var(--fill-normal, rgba(112,115,124,0.08))',
        color: isActive ? 'var(--static-white,#fff)' : 'var(--label-neutral, rgba(46,47,51,0.88))'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Category, __ds_default_components_navigation_Category_11ku4s7: Category });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Category.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
/* TecAce — Menu: floating action list (popover). Render inside a positioned wrapper. */
function Menu({
  items = [],
  onSelect,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "menu",
    style: {
      minWidth: 180,
      background: 'var(--background-elevated-normal,#fff)',
      borderRadius: 12,
      padding: 6,
      boxShadow: '0 6px 20px rgba(23,23,25,0.14), inset 0 0 0 1px rgba(112,115,124,0.10)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: 'var(--line-normal, rgba(112,115,124,0.12))',
      margin: '6px 4px'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    role: "menuitem",
    disabled: it.disable,
    onClick: () => {
      if (!it.disable) {
        it.onClick && it.onClick();
        onSelect && onSelect(it.value ?? it.label);
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      border: 'none',
      background: 'transparent',
      textAlign: 'left',
      cursor: it.disable ? 'default' : 'pointer',
      padding: '10px 12px',
      borderRadius: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.467,
      color: it.disable ? 'var(--label-disable, rgba(55,56,60,0.28))' : it.danger ? 'var(--status-negative, rgb(232,48,52))' : 'var(--label-normal)',
      outline: 'none'
    },
    onMouseEnter: e => !it.disable && (e.currentTarget.style.background = 'var(--fill-normal, rgba(112,115,124,0.08))'),
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, it.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Menu, __ds_default_components_navigation_Menu_14b5sha: Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/* TecAce — Pagination / Page Indicator: dots (carousel) or numeric pager. */
function Pagination({
  total = 1,
  current = 0,
  variant = 'dots',
  onChange,
  className,
  style
}) {
  if (variant === 'dots') {
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        ...style
      }
    }, Array.from({
      length: total
    }).map((_, i) => {
      const on = i === current;
      return /*#__PURE__*/React.createElement("span", {
        key: i,
        onClick: () => onChange && onChange(i),
        style: {
          width: on ? 18 : 6,
          height: 6,
          borderRadius: 100,
          background: on ? 'var(--primary-normal)' : 'var(--fill-strong, rgba(112,115,124,0.16))',
          cursor: 'pointer',
          transition: 'width .2s ease, background .2s ease'
        }
      });
    }));
  }
  const go = n => n >= 0 && n < total && onChange && onChange(n);
  const arrow = (d, off) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: off,
    onClick: () => go(current + d),
    "aria-label": d < 0 ? '이전' : '다음',
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      border: 'none',
      background: 'transparent',
      cursor: off ? 'default' : 'pointer',
      color: off ? 'var(--label-disable, rgba(55,56,60,0.28))' : 'var(--label-normal)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: d < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7',
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, arrow(-1, current <= 0), Array.from({
    length: total
  }).map((_, i) => {
    const on = i === current;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => go(i),
      style: {
        minWidth: 36,
        height: 36,
        borderRadius: 8,
        border: 'none',
        background: on ? 'var(--primary-normal)' : 'transparent',
        color: on ? 'var(--static-white,#fff)' : 'var(--label-neutral, rgba(46,47,51,0.88))',
        fontFamily: 'var(--font-sans)',
        fontWeight: on ? 600 : 500,
        fontSize: 14,
        cursor: 'pointer',
        outline: 'none'
      }
    }, i + 1);
  }), arrow(1, current >= total - 1));
}
Object.assign(__ds_scope, { Pagination, __ds_default_components_navigation_Pagination_16xqq9v: Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
/* TecAce — SegmentedControl: inset track with sliding selected pill. */
function SegmentedControl({
  items = [],
  value,
  onChange,
  size = 'md',
  className,
  style
}) {
  const norm = items.map(i => typeof i === 'string' ? {
    label: i,
    value: i
  } : i);
  const idx = Math.max(0, norm.findIndex(o => o.value === (value ?? norm[0]?.value)));
  const pad = size === 'sm' ? 3 : 4;
  const h = size === 'sm' ? 32 : 40;
  const font = size === 'sm' ? 13 : 14;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      padding: pad,
      borderRadius: 12,
      background: 'var(--fill-normal, rgba(112,115,124,0.08))',
      height: h,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: pad,
      bottom: pad,
      left: pad,
      width: `calc((100% - ${pad * 2}px) / ${norm.length})`,
      transform: `translateX(${idx * 100}%)`,
      transition: 'transform .2s ease',
      background: 'var(--background-normal-normal,#fff)',
      borderRadius: 9,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
    }
  }), norm.map((o, i) => {
    const on = i === idx;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onChange && onChange(o.value),
      style: {
        position: 'relative',
        flex: 1,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '0 16px',
        fontFamily: 'var(--font-sans)',
        fontWeight: on ? 600 : 500,
        fontSize: font,
        whiteSpace: 'nowrap',
        color: on ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)',
        transition: 'color .15s ease',
        outline: 'none'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl, __ds_default_components_navigation_SegmentedControl_1y0kpw6: SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tab.jsx
try { (() => {
/* TecAce — Tab (Tab/Tab): horizontal tab bar with active underline indicator. */
function Tab({
  items = [],
  value,
  onChange,
  size = 'md',
  className,
  style
}) {
  const font = size === 'lg' ? 17 : size === 'sm' ? 14 : 16;
  const active = value ?? (items[0] && (items[0].value ?? items[0].label));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 4,
      boxShadow: 'inset 0 -1px 0 var(--line-normal, rgba(112,115,124,0.16))',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((it, i) => {
    const v = it.value ?? it.label ?? i;
    const isActive = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(v),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '12px 16px',
        fontFamily: 'var(--font-sans)',
        fontWeight: isActive ? 600 : 500,
        fontSize: font,
        lineHeight: 1.5,
        color: isActive ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)',
        outline: 'none',
        transition: 'color .15s ease'
      }
    }, it.label, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: 'var(--label-normal, rgb(23,23,25))'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tab, __ds_default_components_navigation_Tab_189qsk0: Tab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tab.jsx", error: String((e && e.message) || e) }); }

// components/overlay/BottomSheet.jsx
try { (() => {
/* TecAce — BottomSheet: mobile sheet anchored to the bottom with grabber. */
function BottomSheet({
  open = true,
  title,
  onClose,
  children,
  className,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 900,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      background: 'rgba(23,23,25,0.48)',
      fontFamily: 'var(--font-sans)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--background-elevated-normal,#fff)',
      borderRadius: '24px 24px 0 0',
      padding: '8px 20px 24px',
      maxHeight: '80%',
      overflowY: 'auto',
      boxShadow: '0 -8px 30px rgba(23,23,25,0.18)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 100,
      background: 'var(--fill-strong, rgba(112,115,124,0.16))',
      margin: '6px auto 14px'
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.445,
      color: 'var(--label-normal)',
      marginBottom: 12
    }
  }, title), children));
}
Object.assign(__ds_scope, { BottomSheet, __ds_default_components_overlay_BottomSheet_t0q5uh: BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
/* TecAce — Modal: scrim + centered dialog shell. Compose your own content/footer. */
function Modal({
  open = true,
  title,
  onClose,
  footer = null,
  width = 400,
  children,
  className,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      background: 'rgba(23,23,25,0.48)',
      backdropFilter: 'blur(2px)',
      fontFamily: 'var(--font-sans)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '86vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--background-elevated-normal,#fff)',
      borderRadius: 20,
      boxShadow: '0 12px 40px rgba(23,23,25,0.22)',
      ...style
    }
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '20px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.445,
      letterSpacing: '-0.002em',
      color: 'var(--label-normal)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\uB2EB\uAE30",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      width: 24,
      height: 24,
      color: 'var(--label-alternative,#8a8d94)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 20px',
      overflowY: 'auto',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--label-neutral, rgba(46,47,51,0.88))'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '12px 20px 20px',
      boxShadow: 'inset 0 1px 0 var(--line-normal, rgba(112,115,124,0.12))'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal, __ds_default_components_overlay_Modal_1at6gvs: Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// components/selection/AutoComplete.jsx
try { (() => {
/**
 * Auto Complete — a text input with a filtered suggestion dropdown.
 * Container/spacing transcribed from Figma "Auto Complete/Auto Complete"
 * (width 320, dropdown radius 16, item rows 15px / gap 4).
 */
function AutoComplete({
  options = [],
  value = "",
  placeholder = "검색어를 입력하세요",
  onChange,
  onSelect,
  width = 320,
  className,
  style
}) {
  const [query, setQuery] = React.useState(value);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const q = query.trim().toLowerCase();
  const matches = q ? options.filter(o => String(o).toLowerCase().includes(q)) : options;
  const pick = opt => {
    setQuery(opt);
    setOpen(false);
    onSelect && onSelect(opt);
    onChange && onChange(opt);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width,
      position: "relative",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: query,
    placeholder: placeholder,
    onChange: e => {
      setQuery(e.target.value);
      setOpen(true);
      setActive(0);
      onChange && onChange(e.target.value);
    },
    onFocus: () => setOpen(true),
    onBlur: () => setTimeout(() => setOpen(false), 120),
    onKeyDown: e => {
      if (e.key === "ArrowDown") {
        setActive(a => Math.min(a + 1, matches.length - 1));
        setOpen(true);
      } else if (e.key === "ArrowUp") setActive(a => Math.max(a - 1, 0));else if (e.key === "Enter" && open && matches[active]) pick(matches[active]);else if (e.key === "Escape") setOpen(false);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 48,
      padding: "0 16px",
      borderRadius: 12,
      border: 0,
      boxShadow: "inset 0 0 0 1px var(--line-solid-neutral,rgb(225,226,228))",
      fontSize: 15,
      lineHeight: 1.467,
      letterSpacing: "0.010em",
      color: "var(--label-normal,rgb(23,23,25))",
      outline: "none",
      background: "var(--background-normal-normal,#fff)"
    }
  }), open && matches.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 56,
      zIndex: 20,
      maxHeight: 400,
      overflowY: "auto",
      padding: "8px 0",
      borderRadius: 16,
      background: "var(--background-elevated-normal,#fff)",
      boxShadow: "inset 0 0 0 1px var(--line-solid-neutral,rgb(225,226,228)), 0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 20px"
    }
  }, matches.map((opt, i) => /*#__PURE__*/React.createElement("div", {
    key: opt + i,
    onMouseDown: e => {
      e.preventDefault();
      pick(opt);
    },
    onMouseEnter: () => setActive(i),
    style: {
      padding: "10px 12px",
      margin: "0 -12px",
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 15,
      lineHeight: 1.467,
      letterSpacing: "0.010em",
      color: "var(--label-normal,rgb(23,23,25))",
      background: i === active ? "var(--fill-normal,rgba(112,115,124,0.08))" : "transparent"
    }
  }, opt)))));
}
Object.assign(__ds_scope, { AutoComplete, __ds_default_components_selection_AutoComplete_uix0o1: AutoComplete });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/AutoComplete.jsx", error: String((e && e.message) || e) }); }

// components/selection/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Checkbox (Control/Checkbox). Box + optional label. */
const SIZES = {
  md: 24,
  sm: 20
};
function Checkbox({
  checked = false,
  indeterminate = false,
  disable = false,
  size = 'md',
  label,
  onChange,
  className,
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.md;
  const on = checked || indeterminate;
  const fill = disable ? 'var(--fill-normal, rgba(112,115,124,0.08))' : on ? 'var(--primary-normal)' : 'transparent';
  const border = on || disable ? 'none' : 'inset 0 0 0 1.5px var(--line-strong, rgba(112,115,124,0.52))';
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disable ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.467,
      color: disable ? 'rgba(55,56,60,0.28)' : 'var(--label-normal)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: disable ? undefined : () => onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: 6,
      background: fill,
      boxShadow: border,
      flexShrink: 0,
      transition: 'background-color .15s ease'
    }
  }, rest), indeterminate ? /*#__PURE__*/React.createElement("svg", {
    width: box * 0.6,
    height: box * 0.6,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h10",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  })) : on ? /*#__PURE__*/React.createElement("svg", {
    width: box * 0.7,
    height: box * 0.7,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 8.5l3 3 6-6.5",
    stroke: disable ? 'rgba(55,56,60,0.28)' : '#fff',
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox, __ds_default_components_selection_Checkbox_2gcziu: Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/selection/DatePicker.jsx
try { (() => {
const ITEM_H = 34;
const VISIBLE = 5;
function Wheel({
  values,
  index,
  onChange,
  width
}) {
  const ref = React.useRef(null);
  const pad = (VISIBLE - 1) / 2 * ITEM_H;
  React.useEffect(() => {
    if (ref.current) ref.current.scrollTop = index * ITEM_H;
  }, [index]);
  const onScroll = e => {
    const i = Math.round(e.target.scrollTop / ITEM_H);
    if (i !== index && i >= 0 && i < values.length) onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onScroll: onScroll,
    style: {
      width,
      height: VISIBLE * ITEM_H,
      overflowY: "auto",
      scrollSnapType: "y mandatory",
      WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 34%, #000 66%, transparent)",
      maskImage: "linear-gradient(to bottom, transparent, #000 34%, #000 66%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: pad,
      paddingBottom: pad
    }
  }, values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: ITEM_H,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      scrollSnapAlign: "center",
      fontSize: 20,
      letterSpacing: "-0.004em",
      fontWeight: i === index ? 600 : 500,
      color: i === index ? "var(--label-normal,rgb(23,23,25))" : "var(--label-assistive,rgb(174,176,182))"
    }
  }, v))));
}

/**
 * Date Picker — iOS-style triple wheel (year / month / day). Scroll or drag
 * each column to a value. Container spec from Figma "Date Picker/iOS/Wheel".
 */
function DatePicker({
  value,
  minYear = 2000,
  maxYear = 2030,
  onChange,
  className,
  style
}) {
  const init = value instanceof Date ? value : new Date();
  const [y, setY] = React.useState(init.getFullYear());
  const [m, setM] = React.useState(init.getMonth());
  const [d, setD] = React.useState(init.getDate());
  const years = Array.from({
    length: maxYear - minYear + 1
  }, (_, i) => minYear + i);
  const months = Array.from({
    length: 12
  }, (_, i) => i + 1 + "월");
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const days = Array.from({
    length: daysInMonth
  }, (_, i) => i + 1 + "일");
  const dd = Math.min(d, daysInMonth);
  const emit = (ny, nm, ndv) => {
    onChange && onChange(new Date(ny, nm, ndv));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: "fit-content",
      padding: "8px 0",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-sans)",
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      height: ITEM_H,
      borderRadius: 8,
      background: "var(--fill-normal,rgba(112,115,124,0.08))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Wheel, {
    values: years,
    index: years.indexOf(y),
    width: 92,
    onChange: i => {
      setY(years[i]);
      emit(years[i], m, dd);
    }
  }), /*#__PURE__*/React.createElement(Wheel, {
    values: months,
    index: m,
    width: 72,
    onChange: i => {
      setM(i);
      emit(y, i, dd);
    }
  }), /*#__PURE__*/React.createElement(Wheel, {
    values: days,
    index: dd - 1,
    width: 72,
    onChange: i => {
      setD(i + 1);
      emit(y, m, i + 1);
    }
  })));
}
Object.assign(__ds_scope, { DatePicker, __ds_default_components_selection_DatePicker_1ayywy3: DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/selection/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Radio (Control/Radio). */
const SIZES = {
  md: 24,
  sm: 20
};
function Radio({
  checked = false,
  disable = false,
  size = 'md',
  label,
  name,
  value,
  onChange,
  className,
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.md;
  const ring = disable ? 'inset 0 0 0 1.5px rgba(112,115,124,0.22)' : checked ? 'none' : 'inset 0 0 0 1.5px var(--line-strong, rgba(112,115,124,0.52))';
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disable ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.467,
      color: disable ? 'rgba(55,56,60,0.28)' : 'var(--label-normal)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: disable ? undefined : () => onChange && onChange(value ?? true),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: 1000,
      background: checked && !disable ? 'var(--primary-normal)' : 'transparent',
      boxShadow: ring,
      flexShrink: 0,
      transition: 'background-color .15s ease'
    }
  }, rest), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: box * 0.42,
      height: box * 0.42,
      borderRadius: 1000,
      background: disable ? 'rgba(55,56,60,0.28)' : '#fff'
    }
  })), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio, __ds_default_components_selection_Radio_1dqr2ke: Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Radio.jsx", error: String((e && e.message) || e) }); }

// components/selection/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — SearchField: pill search input with leading icon and clear. */
function SearchField({
  value,
  defaultValue,
  placeholder = '검색',
  onChange,
  onClear,
  className,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue || '');
  const val = value != null ? value : inner;
  const set = v => {
    if (value == null) setInner(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 44,
      padding: '0 14px',
      borderRadius: 1000,
      background: 'var(--fill-normal, rgba(112,115,124,0.08))',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      color: 'var(--label-alternative,#8a8d94)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3.5-3.5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", _extends({
    value: val,
    placeholder: placeholder,
    onChange: e => {
      set(e.target.value);
      onChange && onChange(e);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.467,
      color: 'var(--label-normal)',
      minWidth: 0
    }
  }, rest)), val && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      set('');
      onClear && onClear();
    },
    "aria-label": "\uC9C0\uC6B0\uAE30",
    style: {
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--label-alternative,#8a8d94)',
      display: 'inline-flex',
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 8.5l7 7M15.5 8.5l-7 7",
    stroke: "var(--fill-normal,#f0f0f0)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { SearchField, __ds_default_components_selection_SearchField_1h3r4uh: SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/selection/Select.jsx
try { (() => {
/* TecAce — Select / Dropdown (Auto Complete family): trigger + popover list. */
function Select({
  options = [],
  value,
  placeholder = '선택',
  label,
  disable = false,
  onChange,
  className,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const norm = options.map(o => typeof o === 'string' ? {
    label: o,
    value: o
  } : o);
  const sel = norm.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.429,
      color: 'var(--label-normal)'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disable,
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 48,
      padding: '0 16px',
      borderRadius: 12,
      border: 'none',
      boxShadow: open ? 'inset 0 0 0 1.5px var(--primary-normal)' : 'inset 0 0 0 1px rgba(112,115,124,0.16)',
      background: disable ? 'var(--fill-alternative, rgba(112,115,124,0.05))' : 'var(--background-normal-normal,#fff)',
      cursor: disable ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.5,
      color: sel ? 'var(--label-normal)' : 'var(--label-alternative, #8a8d94)',
      minWidth: 160,
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform .15s ease',
      color: 'var(--label-alternative,#8a8d94)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: 4,
      zIndex: 20,
      background: 'var(--background-elevated-normal,#fff)',
      borderRadius: 12,
      boxShadow: '0 6px 20px rgba(23,23,25,0.14), inset 0 0 0 1px rgba(112,115,124,0.10)',
      padding: 6,
      maxHeight: 240,
      overflowY: 'auto'
    }
  }, norm.map((o, i) => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 12px',
        borderRadius: 8,
        cursor: 'pointer',
        fontSize: 15,
        lineHeight: 1.467,
        fontWeight: on ? 600 : 500,
        color: on ? 'var(--primary-normal)' : 'var(--label-normal)',
        background: on ? 'var(--fill-normal, rgba(112,115,124,0.08))' : 'transparent'
      },
      onMouseEnter: e => e.currentTarget.style.background = 'var(--fill-normal, rgba(112,115,124,0.08))',
      onMouseLeave: e => e.currentTarget.style.background = on ? 'var(--fill-normal, rgba(112,115,124,0.08))' : 'transparent'
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, o.label), on && /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.5 8.5l3 3 6-6.5",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  })));
}
Object.assign(__ds_scope, { Select, __ds_default_components_selection_Select_8jimtr: Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Select.jsx", error: String((e && e.message) || e) }); }

// components/selection/Slider.jsx
try { (() => {
/* TecAce — Slider: single-value track with primary fill + thumb. */
function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  disable = false,
  onChange,
  className,
  style
}) {
  const ref = React.useRef(null);
  const pct = (value - min) / (max - min) * 100;
  const set = clientX => {
    if (!ref.current || disable) return;
    const r = ref.current.getBoundingClientRect();
    let p = (clientX - r.left) / r.width;
    p = Math.max(0, Math.min(1, p));
    let v = min + p * (max - min);
    v = Math.round(v / step) * step;
    onChange && onChange(Math.max(min, Math.min(max, v)));
  };
  const drag = e => {
    set(e.clientX);
    const mv = ev => set(ev.clientX);
    const up = () => {
      document.removeEventListener('mousemove', mv);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', mv);
    document.addEventListener('mouseup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    onMouseDown: drag,
    style: {
      position: 'relative',
      height: 24,
      display: 'flex',
      alignItems: 'center',
      cursor: disable ? 'default' : 'pointer',
      opacity: disable ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      width: '100%',
      borderRadius: 100,
      background: 'var(--fill-strong, rgba(112,115,124,0.16))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      height: 6,
      width: pct + '%',
      borderRadius: 100,
      background: 'var(--primary-normal)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: pct + '%',
      width: 20,
      height: 20,
      marginLeft: -10,
      borderRadius: 1000,
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(112,115,124,0.10)'
    }
  }));
}
Object.assign(__ds_scope, { Slider, __ds_default_components_selection_Slider_8oe8aa: Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Slider.jsx", error: String((e && e.message) || e) }); }

// components/selection/Stepper.jsx
try { (() => {
/* TecAce — Stepper: numeric increment/decrement (Cell trailing value control). */
function Stepper({
  value = 0,
  min = 0,
  max = 99,
  step = 1,
  disable = false,
  onChange,
  className,
  style
}) {
  const set = v => {
    const n = Math.max(min, Math.min(max, v));
    if (n !== value) onChange && onChange(n);
  };
  const btn = (label, fn, off) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disable || off,
    onClick: () => !off && fn(),
    "aria-label": label,
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: 'none',
      background: 'var(--fill-normal, rgba(112,115,124,0.08))',
      color: disable || off ? 'var(--label-disable, rgba(55,56,60,0.28))' : 'var(--label-normal)',
      cursor: disable || off ? 'default' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: label === '증가' ? 'M8 3v10M3 8h10' : 'M3 8h10',
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, btn('감소', () => set(value - step), value <= min), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 24,
      textAlign: 'center',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--label-normal)'
    }
  }, value), btn('증가', () => set(value + step), value >= max));
}
Object.assign(__ds_scope, { Stepper, __ds_default_components_selection_Stepper_7cfniq: Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/selection/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — Switch (Control/Switch). 52×32 track, 24 thumb, radius 100. */
const SIZES = {
  md: {
    w: 52,
    h: 32,
    thumb: 24,
    pad: 4
  },
  sm: {
    w: 40,
    h: 24,
    thumb: 18,
    pad: 3
  }
};
function Switch({
  active = false,
  disable = false,
  size = 'md',
  onChange,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const travel = s.w - s.thumb - s.pad * 2;
  const trackBg = disable ? 'rgba(112,115,124,0.08)' : active ? 'var(--primary-normal)' : 'rgba(112,115,124,0.16)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": active,
    disabled: disable,
    onClick: disable ? undefined : () => onChange && onChange(!active),
    className: className,
    style: {
      position: 'relative',
      width: s.w,
      height: s.h,
      borderRadius: 100,
      border: 'none',
      padding: s.pad,
      background: trackBg,
      cursor: disable ? 'default' : 'pointer',
      transition: 'background-color .2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0,
      opacity: disable ? 0.6 : 1,
      outline: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: s.pad,
      left: s.pad,
      width: s.thumb,
      height: s.thumb,
      borderRadius: 1000,
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.16)',
      transition: 'transform .2s ease',
      transform: active ? `translateX(${travel}px)` : 'translateX(0)'
    }
  }));
}
Object.assign(__ds_scope, { Switch, __ds_default_components_selection_Switch_8w67cx: Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Switch.jsx", error: String((e && e.message) || e) }); }

// components/selection/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TecAce — TextField (text input). radius 12, inset border, focus → primary border. */
function TextField({
  value,
  defaultValue,
  placeholder = '',
  label,
  helper,
  error = false,
  disable = false,
  leadingIcon = null,
  trailingIcon = null,
  onChange,
  type = 'text',
  className,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const border = disable ? 'inset 0 0 0 1px rgba(112,115,124,0.08)' : error ? 'inset 0 0 0 1px var(--status-negative, rgb(232,48,52))' : focused ? 'inset 0 0 0 1.5px var(--primary-normal)' : 'inset 0 0 0 1px rgba(112,115,124,0.16)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.429,
      color: 'var(--label-normal)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 12,
      boxShadow: border,
      background: disable ? 'var(--fill-alternative, rgba(112,115,124,0.05))' : 'var(--background-normal-normal,#fff)',
      padding: '0 16px',
      height: 48,
      transition: 'box-shadow .15s ease'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      color: 'var(--label-alternative, #8a8d94)',
      flexShrink: 0
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disable,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--label-normal)',
      minWidth: 0
    }
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      color: 'var(--label-alternative, #8a8d94)',
      flexShrink: 0
    }
  }, trailingIcon)), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.385,
      color: error ? 'var(--status-negative, rgb(232,48,52))' : 'var(--label-alternative, #8a8d94)'
    }
  }, helper));
}
Object.assign(__ds_scope, { TextField, __ds_default_components_selection_TextField_1wjlgew: TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/TextField.jsx", error: String((e && e.message) || e) }); }

// components/selection/ToggleIcon.jsx
try { (() => {
/**
 * Toggle icon — a tappable icon that swaps color on/off (e.g. bookmark, like).
 * Active paints the icon in primary blue; inactive in neutral grey.
 * Geometry from Figma "Control/Toggle Icon" (20×24 icon box).
 */
function ToggleIcon({
  icon,
  active = false,
  onClick,
  className,
  style
}) {
  const color = active ? "rgb(51,102,255)" : "rgb(196,196,196)";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    className: className,
    style: {
      width: 24,
      height: 24,
      border: 0,
      background: "transparent",
      padding: 0,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      display: "inline-flex"
    }
  }, icon));
}
Object.assign(__ds_scope, { ToggleIcon, __ds_default_components_selection_ToggleIcon_a300ai: ToggleIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/ToggleIcon.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ChipFilter = __ds_scope.ChipFilter;

__ds_ns.ChipMultiSelect = __ds_scope.ChipMultiSelect;

__ds_ns.FloatingActionButton = __ds_scope.FloatingActionButton;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextButton = __ds_scope.TextButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContentBadge = __ds_scope.ContentBadge;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.BottomNavigation = __ds_scope.BottomNavigation;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Category = __ds_scope.Category;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tab = __ds_scope.Tab;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.AutoComplete = __ds_scope.AutoComplete;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ToggleIcon = __ds_scope.ToggleIcon;

})();
