import React from 'react';
import { MessageCircle, ScanLine, ArrowRight, ShieldCheck } from 'lucide-react';

export const ServiceCard: React.FC = () => {
  const qrCodeUrl = "https://ok1122.oss-cn-hangzhou.aliyuncs.com/img/mao.png";

  return (
    <div className="glass-effect rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-1">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <div className="relative">
          <div className="absolute -inset-2 bg-blue-100 rounded-full blur-md opacity-50"></div>
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg text-white">
            <MessageCircle size={32} strokeWidth={1.5} />
          </div>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
            联系专属客服
          </h1>
          <p className="text-slate-500 mt-2 text-sm sm:text-base max-w-[260px] mx-auto leading-relaxed">
            如遇任何问题或需要咨询，请扫描下方二维码添加客服微信。
          </p>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="relative group mx-auto w-full max-w-[280px]">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
        
        {/* Image Container */}
        <div className="relative bg-white p-3 rounded-xl border border-slate-100 shadow-inner">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-50 relative">
            <img 
              src={qrCodeUrl} 
              alt="客服微信二维码" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
             {/* Scan Overlay (Visual Only) */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/5">
                <ScanLine className="text-blue-600 w-12 h-12 animate-pulse" />
             </div>
          </div>
        </div>
      </div>

      {/* Instructions & Features */}
      <div className="mt-8 space-y-6">
        <div className="flex items-center justify-center gap-2 text-indigo-600 font-medium bg-indigo-50 py-3 px-4 rounded-xl border border-indigo-100/50">
          <ScanLine size={18} />
          <span className="text-sm">微信扫一扫 · 立即咨询</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center text-center p-3 rounded-lg bg-slate-50/50 border border-slate-100">
                <ShieldCheck size={20} className="text-emerald-500 mb-1" />
                <span className="text-xs text-slate-500 font-medium">官方认证</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 rounded-lg bg-slate-50/50 border border-slate-100">
                <div className="flex items-center text-blue-500 mb-1">
                    <span className="text-xs font-bold mr-0.5">24/7</span>
                    <ArrowRight size={14} className="-rotate-45" />
                </div>
                <span className="text-xs text-slate-500 font-medium">全天候响应</span>
            </div>
        </div>

        <p className="text-center text-xs text-slate-400">
           手机用户可截屏或长按图片保存
        </p>
      </div>
    </div>
  );
};