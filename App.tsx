
import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  Lightbulb, 
  Rocket, 
  Target, 
  Users, 
  Zap, 
  ChevronDown,
  LayoutDashboard,
  TrendingUp,
  BrainCircuit,
  Settings2,
  Trophy,
  Activity,
  MousePointer2,
  Calendar,
  Layers,
  Search,
  MessageSquare,
  BarChart3,
  Bot,
  Heart,
  Fingerprint,
  Compass
} from 'lucide-react';

// --- UI Components ---

const SectionHeader = ({ title, subtitle, label }: { title: string, subtitle?: string, label?: string }) => (
  <div className="mb-4 md:mb-6 animate-up">
    {label && (
      <div className="flex items-center gap-2 mb-1">
        <span className="w-6 md:w-8 h-[2px] bg-gradient-to-r from-[#3b82f6] to-transparent"></span>
        <span className="text-[#3b82f6] text-[9px] md:text-xs font-bold tracking-[0.3em] uppercase">{label}</span>
      </div>
    )}
    <h2 className="text-xl md:text-4xl font-black tracking-tight text-white mb-1 md:mb-2 leading-tight">
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 text-xs md:text-lg max-w-4xl font-light leading-relaxed">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "", delay = "" }: { children?: React.ReactNode, className?: string, delay?: string }) => (
  <div className={`glass-card p-3 md:p-5 animate-up opacity-0 ${delay} ${className}`}>
    {children}
  </div>
);

// --- Sections (Verbatim Content from Slides) ---

const Page1 = () => (
  <section className="section">
    <div className="max-w-5xl mx-auto w-full">
      <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[9px] md:text-xs text-gray-400 mb-6 md:mb-8 tracking-[0.4em] uppercase animate-up">
        H R B P A N N UAL R E VIEW & P L AN NING
      </div>
      <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tighter animate-up stagger-1">
        2025年工作回顾<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-glow-blue">
          与2026年工作规划
        </span>
      </h1>
      <div className="w-10 md:w-16 h-1 bg-[#3b82f6] mb-6 md:mb-10 animate-up stagger-2"></div>
      <p className="text-base md:text-2xl text-gray-400 mb-10 md:mb-16 font-light max-w-2xl animate-up stagger-2 leading-relaxed">
        深度融合业务场景，构建HRBP数智化管理闭环
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 pt-6 md:pt-10 border-t border-white/10 animate-up stagger-3">
        <div className="flex items-center gap-3">
          <div className="bg-white/5 p-2 rounded-full"><Users size={14} className="text-gray-500"/></div>
          <div>
            <div className="text-gray-500 text-[9px] uppercase tracking-widest mb-0.5">汇报人</div>
            <div className="text-white font-bold text-sm md:text-base">杨诗音</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white/5 p-2 rounded-full"><Briefcase size={14} className="text-gray-500"/></div>
          <div>
            <div className="text-gray-500 text-[9px] uppercase tracking-widest mb-0.5">所属部门</div>
            <div className="text-white font-bold text-sm md:text-base">正行BU / 人力资源部</div>
          </div>
        </div>
        <div className="flex items-center gap-3 md:col-start-4">
          <div>
            <div className="text-gray-500 text-[9px] uppercase tracking-widest mb-0.5">汇报日期</div>
            <div className="text-white font-bold text-sm md:text-base">2026.02</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Page2 = () => (
  <section className="section">
    <div className="max-w-6xl mx-auto w-full">
      <SectionHeader title="2025年整体综述：快速融入，平稳过渡" label="2025 OVERVIEW" />
      
      <Card className="mb-4 md:mb-6 border-l-4 border-l-[#3b82f6] animate-up stagger-1">
        <p className="text-xs md:text-base leading-relaxed text-gray-300">
          <span className="text-white font-bold">核心基调：</span>5月转岗至今，在无交接背景下，独立完成了核心职能的承接与历史问题的清理，实现了从"事务平稳"到"深度上手"的关键跨越。
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <Card delay="stagger-2">
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6]">
              <Layers size={16} />
            </div>
            <h3 className="text-sm md:text-lg font-bold text-white">业务融入</h3>
          </div>
          <ul className="space-y-1.5 md:space-y-3">
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug"><span className="text-[#3b82f6] font-bold">迅速厘清业务逻辑</span>，深度理解产品体系、客户分层与渠道运营模式</li>
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug">确保岗位调动后日常HR运营的<span className="text-[#3b82f6] font-bold">零中断</span>，实现服务连续性</li>
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug">完成业务语言到HR语言的转化，建立跨部门沟通基础</li>
          </ul>
        </Card>

        <Card delay="stagger-3">
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6]">
              <ShieldCheck size={16} />
            </div>
            <h3 className="text-sm md:text-lg font-bold text-white">历史清算</h3>
          </div>
          <ul className="space-y-1.5 md:space-y-3">
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug">面对前任离职、数据断档等客观困境，重点解决合规管理中长期积累的<span className="text-[#8b5cf6] font-bold">"死结"</span></li>
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug">独立完成历史档案的<span className="text-[#8b5cf6] font-bold">溯源清查</span>，对监管口径进行重新梳理与对齐</li>
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug">化解历史遗留风险，为后续数智化转型扫清障碍</li>
          </ul>
        </Card>

        <Card delay="stagger-4">
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Target size={16} />
            </div>
            <h3 className="text-sm md:text-lg font-bold text-white">角色定位</h3>
          </div>
          <ul className="space-y-1.5 md:space-y-3">
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug">完成从单纯"接手工作"到<span className="text-emerald-500 font-bold">"深度上手业务"</span>的转变</li>
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug">实现管理逻辑的<span className="text-emerald-500 font-bold">平稳衔接</span>，建立可信赖的HRBP专业形象</li>
            <li className="text-[10px] md:text-sm text-gray-400 leading-snug">从执行者向战略伙伴转型，提升HR业务影响力</li>
          </ul>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4 md:mt-8 animate-up stagger-4">
        <div className="text-center p-2 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest">转岗时间</div>
          <div className="text-sm md:text-xl font-black text-white">2025.05</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white/[0.02] border border-white/5">
          <div className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest">工作时长</div>
          <div className="text-sm md:text-xl font-black text-white">7个月</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20">
          <div className="text-[8px] md:text-[10px] text-[#3b82f6] uppercase font-bold">核心成果</div>
          <div className="text-sm md:text-xl font-black text-[#3b82f6]">平稳过渡</div>
        </div>
      </div>
    </div>
  </section>
);

const Page3 = () => (
  <section className="section">
    <div className="max-w-6xl mx-auto w-full">
      <SectionHeader 
        title="2025成功案例：合规体系夯实与系统数据治理" 
        subtitle="深度复盘合规数据治理的底层逻辑与数字化降噪实践"
        label="SUCCESS CASE STUDY" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <div className="space-y-3">
          <Card delay="stagger-1" className="border-t-2 border-t-orange-500/40">
            <h4 className="text-orange-400 font-bold text-[10px] md:text-xs mb-2 flex items-center gap-1.5 uppercase">
              <Activity size={12} /> 背景 (Situation)
            </h4>
            <ul className="space-y-1.5 text-[9px] md:text-xs text-gray-400 leading-snug">
              <li>接手时 <span className="text-white font-bold">缺乏文档沉淀</span>，监管信息积压严重，涵盖 <span className="text-white font-bold">日报数据</span></li>
              <li>人事系统（PS/UA） <span className="text-white font-bold">历史数据逻辑偏差</span>，合规基础薄弱</li>
              <li>前任离职导致 <span className="text-white font-bold">关键信息断档</span>，形成管理盲区</li>
            </ul>
          </Card>
          
          <Card delay="stagger-2" className="border-t-2 border-t-[#3b82f6]/40">
            <h4 className="text-[#3b82f6] font-bold text-[10px] md:text-xs mb-2 flex items-center gap-1.5 uppercase">
              <Settings2 size={12} /> 动作 (Action)
            </h4>
            <div className="space-y-3">
              <div>
                <div className="text-white font-bold text-[9px] mb-0.5 uppercase">溯源清查</div>
                <p className="text-[9px] md:text-[11px] text-gray-500">重新梳理监管口径；报送 <span className="text-white">近千条</span> 历史数据，日报、月报一次性归口</p>
              </div>
              <div>
                <div className="text-white font-bold text-[9px] mb-0.5 uppercase">逻辑优化</div>
                <p className="text-[9px] md:text-[11px] text-gray-500">主导 PS/UA <span className="text-white">逻辑重塑</span>，推动 <span className="text-white">全量清洗</span>，解决系统"报表不符"顽疾</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card delay="stagger-3" className="h-full bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div className="mb-4">
              <h4 className="text-emerald-400 font-bold text-[10px] md:text-xs mb-4 flex items-center gap-1.5 uppercase">
                <Trophy size={12} /> 结果 (Result)
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <div className="text-xl md:text-2xl font-black text-white mb-1">合规0差错</div>
                  <ul className="text-[9px] md:text-xs text-gray-400 space-y-1">
                    <li>持牌率 <span className="text-white">100%</span></li>
                    <li>存量业务 <span className="text-white">合规运行</span></li>
                    <li>规避监管风险</li>
                  </ul>
                </div>
                <div className="p-3 bg-[#8b5cf6]/10 rounded-lg border border-[#8b5cf6]/20">
                  <div className="text-xl md:text-2xl font-black text-white mb-1">降噪提效</div>
                  <ul className="text-[9px] md:text-xs text-gray-400 space-y-1">
                    <li>显著降低中后台维护成本</li>
                    <li>报送效率 <span className="text-white">大幅提升</span></li>
                    <li>预计实现 <span className="text-white">自动化报表</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="p-2 bg-white/5 rounded-lg text-center">
                <div className="text-[8px] text-gray-500 mb-0.5">清洗量</div>
                <div className="text-xs md:text-sm font-bold text-white">全量</div>
              </div>
              <div className="p-2 bg-white/5 rounded-lg text-center">
                <div className="text-[8px] text-gray-500 mb-0.5">优化系统</div>
                <div className="text-xs md:text-sm font-bold text-[#3b82f6]">PS+UA</div>
              </div>
              <div className="p-2 bg-emerald-500/20 rounded-lg text-center">
                <div className="text-[8px] text-emerald-400 mb-0.5">合规成果</div>
                <div className="text-xs md:text-sm font-bold text-emerald-400">0差错</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="mt-4 p-3 glass-card bg-gradient-to-r from-[#8b5cf6]/10 to-transparent flex items-center gap-3 animate-up stagger-4">
        <Lightbulb size={16} className="text-yellow-400 shrink-0" />
        <span className="text-white font-bold italic text-[10px] md:text-sm">核心方法论：从"被动维护"到"主动治理"的系统化思维转变</span>
      </div>
    </div>
  </section>
);

const Page4 = () => (
  <section className="section">
    <div className="max-w-6xl mx-auto w-full">
      <SectionHeader 
        title="2025反思：从&quot;被动响应&quot;到&quot;前置介入&quot;" 
        subtitle="剖析业务介入缺失的深层原因与时机错失"
        label="LESSONS LEARNED" 
      />
      
      <Card className="mb-4 md:mb-6 border-l-4 border-l-orange-500 bg-orange-500/5" delay="stagger-1">
        <h4 className="text-orange-500 font-bold mb-1 flex items-center gap-2 text-[10px] md:text-base">
          <Search size={14} /> 反思点 (Problem)
        </h4>
        <p className="text-gray-300 text-[10px] md:text-lg leading-snug">
          业务介入度不够，影响力多局限于部分职能部门，未能充分发挥HRBP在业务决策中的战略价值。
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card delay="stagger-2">
          <h4 className="text-white font-bold mb-3 flex items-center gap-2 border-b border-white/10 pb-2 text-[10px] md:text-sm uppercase">
            <Layers size={14} className="text-[#3b82f6]"/> 深度剖析 (Root Cause)
          </h4>
          <div className="space-y-4">
            <div>
              <div className="text-white font-bold text-[10px] md:text-xs mb-1">介入不足的主因</div>
              <p className="text-[9px] md:text-sm text-gray-400 leading-relaxed">
                并非精力被牵扯，而是 <span className="text-white">缺乏精准的业务抓手</span> 。导致HR工作停留在事务性支持层面。
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-[10px] md:text-xs mb-1">切入时机偏晚</div>
              <p className="text-[9px] md:text-sm text-gray-400 leading-relaxed">
                多处于 <span className="text-[#3b82f6]">&quot;响应业务端需求&quot;</span> 的被动状态，未能第一时间提供决策支撑。
              </p>
            </div>
          </div>
        </Card>

        <Card delay="stagger-3" className="bg-white/[0.02]">
          <h4 className="text-white font-bold mb-3 flex items-center gap-2 border-b border-white/10 pb-2 text-[10px] md:text-sm uppercase">
             <Rocket size={14} className="text-[#8b5cf6]"/> 改进方向 (Improvement)
          </h4>
          <div className="space-y-3">
            {[
              { n: "1", t: "数字化工具赋能", d: "主动寻找与业务互动的&quot;强支点&quot;" },
              { n: "2", t: "机制建设保障", d: "建立常态化互动机制，提升经营话语权" },
              { n: "3", t: "前置预警能力", d: "从事后转向事前预判，提前识别风险" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] text-[10px] font-bold shrink-0">{item.n}</div>
                <div>
                  <div className="text-white font-bold text-[10px] md:text-xs mb-0.5">{item.t}</div>
                  <p className="text-[9px] md:text-xs text-gray-500 leading-tight">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 p-4 glass-card text-center animate-up stagger-4 bg-gradient-to-r from-transparent via-white/5 to-transparent">
        <p className="text-white text-[11px] md:text-lg font-bold italic leading-relaxed">
          &quot;核心洞察：HRBP的价值不在于&quot;做多少事&quot;，而在于&quot;在关键时刻能否提供不可替代的决策支持&quot;&quot;
        </p>
      </div>
    </div>
  </section>
);

const Page5 = () => (
  <section className="section">
    <div className="max-w-6xl mx-auto w-full">
      <SectionHeader 
        title="【数智提效】招聘全流程智能化" 
        subtitle="打通&quot;筛选-评估&quot;全链路，AI驱动招聘效能跃升"
        label="2026 STRATEGIC TASK 01" 
      />
      
      <div className="glass-card p-3 md:p-6 mb-4 md:mb-6 flex justify-between items-center animate-up stagger-1 border-t-2 border-t-[#3b82f6]">
         <div className="flex items-center gap-3">
           <Target size={20} className="text-[#3b82f6]" />
           <h4 className="text-sm md:text-xl font-bold text-white uppercase tracking-widest">策略目标</h4>
         </div>
         <div className="flex gap-6 md:gap-12">
            <div className="text-center">
               <div className="text-[8px] text-gray-500 uppercase">事务压缩</div>
               <div className="text-lg md:text-3xl font-black text-[#3b82f6]">-50%</div>
            </div>
            <div className="text-center">
               <div className="text-[8px] text-gray-500 uppercase">核心指标</div>
               <div className="text-lg md:text-3xl font-black text-white">Time to Fill ↓</div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card delay="stagger-2">
          <div className="flex justify-between items-start mb-3">
             <div>
               <div className="text-[#3b82f6] text-[8px] font-bold uppercase tracking-widest">路径一</div>
               <h4 className="text-base md:text-lg font-bold text-white leading-none">简历精准化</h4>
               <div className="text-[8px] text-gray-500 uppercase mt-1">AI辅助选才</div>
             </div>
             <Search className="text-[#3b82f6]/20 shrink-0" size={24} />
          </div>
          <div className="space-y-3">
            <p className="text-[9px] md:text-xs text-gray-400 leading-snug">引入AI模型，基于胜任力模型对候选人经历进行深度匹配打分</p>
            <div className="p-2 bg-white/5 rounded-lg space-y-1.5 text-[9px] md:text-xs text-gray-500">
              <div className="text-white font-bold uppercase text-[8px] mb-1">落地标志</div>
              <li className="flex gap-2"><span>●</span> 输出AI建议清单，提供排序依据</li>
              <li className="flex gap-2"><span>●</span> 减少人工初筛时间50%以上</li>
            </div>
          </div>
        </Card>

        <Card delay="stagger-3">
          <div className="flex justify-between items-start mb-3">
             <div>
               <div className="text-[#8b5cf6] text-[8px] font-bold uppercase tracking-widest">路径二</div>
               <h4 className="text-base md:text-lg font-bold text-white leading-none">面试智能化</h4>
               <div className="text-[8px] text-gray-500 uppercase mt-1">AI面谈助手</div>
             </div>
             <MessageSquare className="text-[#8b5cf6]/20 shrink-0" size={24} />
          </div>
          <div className="space-y-3">
            <p className="text-[9px] md:text-xs text-gray-400 leading-snug">利用 <span className="text-[#8b5cf6]">AI语音转写</span>，自动生成面试摘要，让面试官专注观察沟通</p>
            <div className="p-2 bg-white/5 rounded-lg space-y-1.5 text-[9px] md:text-xs text-gray-500">
              <div className="text-white font-bold uppercase text-[8px] mb-1">落地标志</div>
              <li className="flex gap-2"><span>●</span> 实现从&quot;凭感觉&quot;到&quot;数据留痕&quot;</li>
              <li className="flex gap-2"><span>●</span> 支持多轮面试数据对比分析</li>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-4 p-3 glass-card animate-up stagger-4 flex flex-wrap justify-between items-center gap-2">
         <span className="text-[10px] md:text-sm font-bold text-white uppercase tracking-widest">预期产出：</span>
         <div className="flex flex-wrap gap-4 text-[9px] md:text-xs text-gray-500">
            <span>效率显著提升</span>
            <span>匹配精准度提高</span>
            <span>人才数据资产化</span>
         </div>
      </div>
    </div>
  </section>
);

const Page6 = () => (
  <section className="section">
    <div className="max-w-6xl mx-auto w-full">
      <SectionHeader 
        title="【降本优构】轻量化工具与量化盘点" 
        subtitle="用&quot;小工具&quot;解决&quot;大沟通&quot;，用&quot;数&quot;看清&quot;人&quot;"
        label="2026 STRATEGIC TASK 02" 
      />
      
      <div className="glass-card p-3 md:p-6 mb-4 md:mb-6 flex justify-between items-center animate-up stagger-1 border-t-2 border-t-[#8b5cf6]">
         <div className="flex items-center gap-3">
           <BarChart3 size={20} className="text-[#8b5cf6]" />
           <h4 className="text-sm md:text-xl font-bold text-white uppercase tracking-widest">策略目标</h4>
         </div>
         <div className="flex gap-6 md:gap-12">
            <div className="text-center">
               <div className="text-[8px] text-gray-500 uppercase">行政降噪</div>
               <div className="text-lg md:text-2xl font-black text-[#8b5cf6]">高频事务↓</div>
            </div>
            <div className="text-center">
               <div className="text-[8px] text-gray-500 uppercase">结构优化</div>
               <div className="text-lg md:text-2xl font-black text-white">人力流转</div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card delay="stagger-2">
          <div className="flex justify-between items-start mb-3">
             <div className="flex items-center gap-2">
               <MousePointer2 className="text-[#3b82f6]" size={20} />
               <h4 className="text-sm md:text-lg font-bold text-white">轻量化合规H5</h4>
             </div>
             <div className="text-[8px] text-gray-500 uppercase">自助服务</div>
          </div>
          <p className="text-[9px] md:text-xs text-gray-400 mb-3 leading-snug">利用AI开发H5协作页面，训练 <span className="text-[#3b82f6]">诺chat</span> 成为业务自助服务</p>
          <div className="p-2 bg-white/5 rounded-lg space-y-1 text-[9px] md:text-xs text-gray-500">
            <li className="flex gap-2"><span>●</span> 降低BP答疑成本</li>
            <li className="flex gap-2"><span>●</span> 业务7×24h自助查询</li>
          </div>
        </Card>

        <Card delay="stagger-3">
          <div className="flex justify-between items-start mb-3">
             <div className="flex items-center gap-2">
               <BrainCircuit className="text-[#8b5cf6]" size={20} />
               <h4 className="text-sm md:text-lg font-bold text-white">AI人才价值盘点</h4>
             </div>
             <div className="text-[8px] text-gray-500 uppercase">量化评估</div>
          </div>
          <p className="text-[9px] md:text-xs text-gray-400 mb-3 leading-snug">整合绩效产出数据，识别冗余与高潜，支撑调配决策</p>
          <div className="p-2 bg-white/5 rounded-lg space-y-1 text-[9px] md:text-xs text-gray-500">
            <li className="flex gap-2"><span>●</span> 识别冗余与高潜岗位</li>
            <li className="flex gap-2"><span>●</span> 推动人力向经营一线流转</li>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-4 animate-up stagger-4">
        {[
          { l: "形态", v: "H5轻应用" },
          { l: "维度", v: "多源数据" },
          { l: "目标", v: "结构调优" },
          { l: "价值", v: "降本增效" }
        ].map((m, i) => (
          <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-center">
             <div className="text-[8px] text-gray-600 mb-0.5 uppercase font-bold">{m.l}</div>
             <div className="text-xs md:text-sm font-black text-white">{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Page7 = () => (
  <section className="section">
    <div className="max-w-6xl mx-auto w-full">
      <SectionHeader 
        title="【组织嵌入】深挖痛点，做决策伙伴" 
        subtitle="打破部门墙，在业务决策早期预植入HR视角，前置识别风险"
        label="2026 STRATEGIC TASK 03" 
      />
      
      <div className="glass-card p-3 md:p-6 mb-4 md:mb-6 flex justify-between items-center animate-up stagger-1 border-t-2 border-t-yellow-500">
         <div className="flex items-center gap-3">
           <Zap size={20} className="text-yellow-500" />
           <h4 className="text-sm md:text-xl font-bold text-white uppercase tracking-widest">策略目标</h4>
         </div>
         <div className="flex gap-6 md:gap-12">
            <div className="text-center">
               <div className="text-[8px] text-gray-500 uppercase">角色转变</div>
               <div className="text-lg md:text-2xl font-black text-yellow-500">事后→事前</div>
            </div>
            <div className="text-center">
               <div className="text-[8px] text-gray-500 uppercase">价值升级</div>
               <div className="text-lg md:text-2xl font-black text-white">支持→共创</div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card delay="stagger-2">
          <h4 className="text-yellow-500 font-bold text-[10px] md:text-sm mb-2 flex items-center gap-2 uppercase">
            <Calendar size={14} /> 常态化列席机制
          </h4>
          <p className="text-[9px] md:text-xs text-gray-400 mb-3 leading-snug">固定参加经营会，基于 <span className="text-white">AUM等指标</span> 反向诊断组织问题</p>
          <div className="p-2 bg-white/5 rounded-lg space-y-1 text-[9px] md:text-xs text-gray-500">
            <li className="flex gap-2"><span>●</span> 建立固定互动节奏</li>
            <li className="flex gap-2"><span>●</span> 输出组织诊断报告</li>
            <div className="pt-1.5 border-t border-white/10 text-[8px] text-yellow-500 font-bold">
              动作：从&quot;记录者&quot;到&quot;诊断者&quot;
            </div>
          </div>
        </Card>

        <Card delay="stagger-3">
          <h4 className="text-[#8b5cf6] font-bold text-[10px] md:text-sm mb-2 flex items-center gap-2 uppercase">
            <Activity size={14} /> 组织情绪诊断
          </h4>
          <p className="text-[9px] md:text-xs text-gray-400 mb-3 leading-snug">利用AI生成热力图，前置识别员工倦怠与离职风险</p>
          <div className="p-2 bg-white/5 rounded-lg space-y-1 text-[9px] md:text-xs text-gray-500">
            <li className="flex gap-2"><span>●</span> 建立健康度预警机制</li>
            <li className="flex gap-2"><span>●</span> 针对高风险团队输出建议</li>
          </div>
        </Card>
      </div>

      <div className="mt-4 p-3 glass-card animate-up stagger-4 flex flex-wrap justify-between items-center gap-2">
         <span className="text-[10px] md:text-sm font-bold text-white uppercase tracking-widest">预期产出：</span>
         <div className="flex flex-wrap gap-4 text-[8px] md:text-xs text-gray-500">
            <span>实现&quot;事中共创&quot;</span>
            <span>可视化预警机制</span>
            <span>提升实质贡献度</span>
         </div>
      </div>
    </div>
  </section>
);

const Page8 = () => (
  <section className="section">
    <div className="max-w-5xl mx-auto w-full text-center">
      <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[8px] md:text-xs text-gray-400 mb-6 md:mb-10 tracking-[0.4em] uppercase animate-up">
        2 0 2 6 V I S I O N
      </div>
      
      <div className="space-y-2 mb-10 md:mb-16 animate-up stagger-1">
        <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter leading-none">从&quot;稳&quot;到&quot;精&quot;</h2>
        <div className="text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] tracking-tighter text-glow-purple">
          从&quot;伴&quot;到&quot;战&quot;
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-16 animate-up stagger-2">
        <Card className="text-left border-l-4 border-l-[#3b82f6] p-4 md:p-8 bg-gradient-to-br from-[#3b82f6]/5 to-transparent">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <TrendingUp size={24} className="text-[#3b82f6]" />
            <h4 className="text-base md:text-xl font-black text-white uppercase tracking-widest">从&quot;稳&quot;到&quot;精&quot;</h4>
          </div>
          <p className="text-[10px] md:text-sm text-gray-400 mb-4 leading-relaxed">
            在保障后台稳固的基础上，通过 <span className="text-white">AI手段</span> 实现人才配置的 <span className="text-[#3b82f6]">精准化</span>
          </p>
          <ul className="space-y-2 text-[10px] md:text-sm text-white font-medium">
             <li><span className="text-[#3b82f6] mr-2">→</span> 数智化招聘提效</li>
             <li><span className="text-[#3b82f6] mr-2">→</span> 量化人才盘点优化</li>
             <li><span className="text-[#3b82f6] mr-2">→</span> 轻量化工具降本</li>
          </ul>
        </Card>
        
        <Card className="text-left border-l-4 border-l-[#8b5cf6] p-4 md:p-8 bg-gradient-to-br from-[#8b5cf6]/5 to-transparent">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <Target size={24} className="text-[#8b5cf6]" />
            <h4 className="text-base md:text-xl font-black text-white uppercase tracking-widest">从&quot;伴&quot;到&quot;战&quot;</h4>
          </div>
          <p className="text-[10px] md:text-sm text-gray-400 mb-4 leading-relaxed">
            深入业务前沿，与业务 <span className="text-white">共担指标</span>，驱动 <span className="text-[#8b5cf6]">线上化战略</span> 转型
          </p>
          <ul className="space-y-2 text-[10px] md:text-sm text-white font-medium">
             <li><span className="text-[#8b5cf6] mr-2">→</span> 常态化前置介入决策</li>
             <li><span className="text-[#8b5cf6] mr-2">→</span> AI情绪预警组织风险</li>
             <li><span className="text-[#8b5cf6] mr-2">→</span> 升级为战略共创伙伴</li>
          </ul>
        </Card>
      </div>

      <div className="flex justify-center items-center gap-6 md:gap-10 animate-up stagger-3">
        <div className="flex flex-col items-center gap-1.5">
           <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"><Bot size={18} /></div>
           <span className="text-[8px] text-gray-500 font-bold uppercase">AI赋能</span>
        </div>
        <div className="text-xl md:text-2xl text-gray-700">+</div>
        <div className="flex flex-col items-center gap-1.5">
           <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"><Users size={18} /></div>
           <span className="text-[8px] text-gray-500 font-bold uppercase">业务融合</span>
        </div>
        <div className="text-xl md:text-2xl text-gray-700">=</div>
        <div className="flex flex-col items-center gap-1.5">
           <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#3b82f6]"><Trophy size={18} /></div>
           <span className="text-[8px] text-[#3b82f6] font-bold uppercase">数智驱动</span>
        </div>
      </div>
    </div>
  </section>
);

const Page9 = () => (
  <section className="section">
    <div className="max-w-4xl mx-auto w-full text-center px-4">
      <SectionHeader 
        title="结语：AI 时代的自我锚点" 
        subtitle="在算法驱动的世界，寻找人的确定性"
        label="REFLECTIONS" 
      />
      
      <div className="mt-8 md:mt-12 space-y-8 md:space-y-12 animate-up stagger-1">
        <div className="relative inline-block py-6 px-10 border-y border-white/10">
          <p className="text-xl md:text-3xl font-black text-white italic leading-tight">
            &quot;AI 已来，我们需思考：<br/>
            到底什么才是个人可依赖的不可替代性？&quot;
          </p>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bg-dark px-4"><Bot size={24} className="text-[#3b82f6] opacity-50" /></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-12">
          {[
            { icon: <Heart size={20} />, title: "深度共情", desc: "情感连接的能力" },
            { icon: <Compass size={20} />, title: "道德直觉", desc: "复杂情境的抉择" },
            { icon: <BrainCircuit size={20} />, title: "批判思维", desc: "打破框架的洞察" },
            { icon: <Fingerprint size={20} />, title: "人格魅力", desc: "驱动变革的影响" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center animate-up" style={{ animationDelay: `${0.4 + idx * 0.1}s` }}>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#3b82f6] mb-3 border border-white/5 shadow-inner">
                {item.icon}
              </div>
              <div className="text-white font-bold text-xs md:text-sm mb-1">{item.title}</div>
              <div className="text-[9px] md:text-xs text-gray-500 leading-tight">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 py-6 border-t border-white/5 animate-up stagger-4">
          <p className="text-sm md:text-xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-white to-[#8b5cf6]">
            拥抱智能 · 守望人性
          </p>
          <div className="mt-4 text-[10px] text-gray-600 uppercase tracking-widest font-bold">2026.02 · 正行BU / 人力资源部</div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideCount = 9;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const index = Math.round(scrollRef.current.scrollTop / window.innerHeight);
        if (index !== activeSection) {
          setActiveSection(index);
        }
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollTo = (index: number) => {
    scrollRef.current?.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden select-none bg-[#0a0a12]">
      {/* Side Dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 md:gap-7 pointer-events-auto">
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="group relative flex items-center justify-center"
          >
            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              activeSection === i 
                ? 'bg-[#3b82f6] scale-[2] md:scale-[2.5] shadow-[0_0_20px_#3b82f6]' 
                : 'bg-white/10 group-hover:bg-white/40'
            }`} />
          </button>
        ))}
      </div>

      {/* Progress Bar Top */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 md:hidden overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition-all duration-500 ease-out" 
          style={{ width: `${((activeSection + 1) / slideCount) * 100}%` }}
        />
      </div>

      <div 
        ref={scrollRef} 
        className="scroll-container"
      >
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
      </div>
    </div>
  );
};

export default App;
