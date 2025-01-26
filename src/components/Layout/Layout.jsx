import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import "./Layout.css"

function Layout() {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

    const toggleMenu = () => {
        setIsMenuCollapsed(!isMenuCollapsed);
    };
    const closeMenu = () => {
        setIsMenuCollapsed(true);
    };

    return (
        <div className="layout">
            {/* Navbar */}
            <nav className="container-fluid">
                <strong>Deltuvi</strong>
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuCollapsed ? '☰' : '✖'} {/* Cambiar entre ☰ y ✖ */}
                </button>
                <ul className={`menu ${isMenuCollapsed ? '' : 'collapsed'}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeMenu} /* Cerrar el menú al hacer clic */
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeMenu} /* Cerrar el menú al hacer clic */
                        >
                            Sobre Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/courses"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeMenu} /* Cerrar el menú al hacer clic */
                        >
                            Cursos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeMenu} /* Cerrar el menú al hacer clic */
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Content */}
            <Outlet />

            {/* Footer */}
            <footer className="container">
                <small>© 2025 Deltuvi • Todos los derechos reservados</small>
            </footer>
        </div>
    );
}

export default Layout;
