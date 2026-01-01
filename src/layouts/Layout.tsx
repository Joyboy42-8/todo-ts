import type { LayoutProps } from "../types/props";

export default function Layout({ children }: LayoutProps) {
    return(
        <main className="Layout">
            {children}
        </main>
    );
}