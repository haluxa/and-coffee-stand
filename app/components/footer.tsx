// components/Footer.tsx
import Map from "@/components/map";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <h2 className="sr-only">Access</h2>
      <Map height={320} />
      <Image
        src="/img/shop-exterior.jpg"
        className="footer-image"
        alt=""
        width={2048}
        height={1367}
        quality={70}
        sizes=""
      />
      <div>
        <p>住所：福岡県北九州市小倉北区清水4-3-30</p>
        <a
          href="https://maps.app.goo.gl/42qEgAxmi3YHQxnf7"
          rel="noopener noreferrer"
          target="_blank"
          className="info_link_map"
        >
          Google Maps
        </a>
        <br />
        <a href="https://www.instagram.com/and_coffee_stand">
          Instagram：
          <span className="info_link_insta">@and_coffee_stand</span>
        </a>
      </div>
      <small>©︎and coffee stand ALL Rights Reserved.</small>
    </footer>
  );
}
