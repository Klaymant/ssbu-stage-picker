"use client";

import { useState } from "react";
import { Modal } from "./Modal";

export function Footer() {
  const [creditsModal, setCreditsModal] = useState(false);

  return (
    <footer>
      <p>
        <small>
          Created by <a href="https://github.com/Klaymant" className="text-purple-500">Clément Gauthier</a>
        </small>
      </p>
      <p>
        <small>
          <a href="#credits">Credits</a>
        </small>
      </p>
      <Modal name="credits">
        <h2>Credits</h2>
        <h3>Fonts used</h3>
        <p><span className="text-purple-500">MADE Tommy</span></p>
        <ul className="list-disc list-inside">
          <li><a href="https://www.fontspring.com/fonts/madetype">Font Spring</a></li>
          <li><a href="https://creativemarket.com/MadeType">Creative Market</a></li>
          <li><a href="https://www.youworkforthem.com/designer/1002/madetype">You Work For Them</a></li>
          <li><a href="https://crella.net/store/madetype/">Crella</a></li>
        </ul>
      </Modal>
    </footer>
  );
}