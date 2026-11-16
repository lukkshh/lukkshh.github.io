import { ImageResponse } from "next/og";
import LandingOpenGraph from "../../../components/og/LandingOpenGraph";

export const alt = "Luka Shvelidze — Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<LandingOpenGraph />, size);
}
