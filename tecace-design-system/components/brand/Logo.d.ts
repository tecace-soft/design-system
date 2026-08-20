import * as React from "react";

/**
 * TecAce brand logo — the faceted gem symbol, the "TecAce" wordmark, or the
 * horizontal lockup (symbol + wordmark). Extracted verbatim from the source
 * Figma "Logo" page as native vector paths.
 */
export interface LogoProps {
  /** Which form to render. Default "lockup". */
  variant?: "lockup" | "symbol" | "wordmark";
  /** Symbol edge / wordmark height driver, in px. Default 32. */
  size?: number;
  /** Wordmark fill (symbol keeps its multi-color facets). Default "#213260". */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Logo(props: LogoProps): JSX.Element;
export default Logo;
