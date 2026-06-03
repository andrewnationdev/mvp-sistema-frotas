import { Car, Plus } from 'lucide-react'

export default function HeaderComponent(){
    return <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center space-x-3">
                    <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md shadow-indigo-200">
                        <Car className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Frota<span className="text-indigo-600">Flow</span></span>
                        <span className="hidden sm:inline-block bg-indigo-50 text-indigo-700 text-xs px-2.5 py-0.5 rounded-full font-semibold ml-2">MVP v1.0</span>
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <button className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-indigo-100 active:scale-95">
                        <Plus className="w-4 h-4" />
                        <span>Novo Veículo</span>
                    </button>
                    <div className="flex items-center space-x-2 border-l pl-4 border-slate-200">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-sm">
                            OP
                        </div>
                        <span className="hidden md:inline-block text-sm font-medium text-slate-700">Operador Central</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
}