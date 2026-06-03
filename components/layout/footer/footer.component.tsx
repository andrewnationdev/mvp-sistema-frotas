import { SETTINGS } from "../../../data/app";

export default function FooterComponent(){
    return <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-center text-xs text-slate-400">
        <p>© 2026 {SETTINGS.name}. Protótipo MVP de Alta Fidelidade.</p>
    </footer>
}