import React, {useRef}         from "react";
import "./menu.css";
import {useDetectOutsideClick} from "./useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Menu() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className="container">
            <div className="menu-container">
                <button onClick={onClick} className="menu-trigger">
                    Стриминги
                </button>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        <li>
                            <a href="#">Яндекс.Музыка</a>
                        </li>
                        <li>
                            <a href="#">Spotify</a>
                        </li>
                        <li>
                            <a href="#">Apple Music</a>
                        </li>
                        <li>
                            <a href="#">VK Music</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
