'use strict';

window.DEMO_NAV_GROUPS = [
  {
    id: 'overview',
    label: '概览',
    items: [
      { path: '/app', label: '首页概览', icon: 'gauge' },
    ],
  },
  {
    id: 'ai',
    label: 'Agent 操作 CRM',
    items: [
      { path: '/app/ai/workbench', label: 'Agent–CRM 工作台', icon: 'robot', badge: 'Ontology' },
      { path: '/app/ai/followups', label: '跟进流程', icon: 'flow' },
      { path: '/app/ai/memory', label: '客户记忆与规则', icon: 'brain', badgeKey: 'pendingMemories' },
      { path: '/app/ai/evals', label: '本体论与评测基准', icon: 'scales' },
    ],
  },
  {
    id: 'service',
    label: '客户服务',
    items: [
      { path: '/app/inbox', label: '会话收件箱', icon: 'inbox', badgeKey: 'unreadInbox' },
      { path: '/app/radar', label: '风险雷达', icon: 'radar', badgeKey: 'radarCount' },
      { path: '/app/agenda', label: '日程预约', icon: 'calendar' },
      { path: '/app/templates', label: '快速回复', icon: 'file' },
    ],
  },
  {
    id: 'sales',
    label: '销售日常',
    items: [
      { path: '/app/kanban', label: '销售漏斗', icon: 'kanban' },
      { path: '/app/contacts', label: '联系人', icon: 'users' },
      { path: '/app/tasks', label: '跟进任务', icon: 'tasks', badgeKey: 'openTasks' },
    ],
  },
  {
    id: 'system',
    label: '分析与设置',
    items: [
      { path: '/app/metrics', label: '指标分析', icon: 'chart' },
      { path: '/app/settings', label: '工作区设置', icon: 'settings' },
    ],
  },
];

window.DEMO_STAGES = [
  { id: 'new', name: '新线索' },
  { id: 'contacted', name: '需求调研' },
  { id: 'proposal', name: '方案与报价' },
  { id: 'won', name: '已签约' },
];

window.createInitialDemoState = function createInitialDemoState() {
  return {
    theme: 'light',
    sidebarCollapsed: false,
    activeConvId: 'conv-1',
    inboxFilter: 'all',
    inboxSearch: '',
    composerMode: 'reply',
    workbenchAgent: '商机诊断 Agent',
    workbenchMode: 'controlled',
    outboundPaused: false,
    activeScenarioId: 'ontology-stalled',
    workbenchRuns: [],
    contacts: [
      {
        id: 'c-1',
        name: '孙启航',
        company: '恒拓汽车零部件（苏州）',
        email: 'sun.qihang@example.test',
        phone: '+86 000-0000-0001',
        source: '官网技术咨询',
        tags: ['重点', '视觉质检'],
        memories: [
          { id: 'm-1', text: '仅接受工作日 9:30–11:30 电话沟通（产线早会后），拒绝机器人自动外呼', status: 'confirmed', source: '会话提取 · 2026-11-16' },
          { id: 'm-2', text: '一期预算上限 ¥40 万，要求兼容现有西门子 PLC，停线改造窗口不超过 48 小时', status: 'confirmed', source: '人工确认 · 2026-11-17' },
          { id: 'm-3', text: '希望下周二前拿到两套光源与相机选型方案对比', status: 'candidate', source: '待审核候选记忆 · 来自收件箱' },
        ],
      },
      {
        id: 'c-2',
        name: '何嘉宁',
        company: '锐驰电机（宁波）',
        email: 'he.jianing@example.test',
        phone: '+86 000-0000-0002',
        source: '老客户续约',
        tags: ['AGV 维保'],
        memories: [
          { id: 'm-4', text: '现有 12 台 AGV 分布在两个车间，需要与厂内 WMS 打通调度与故障工单', status: 'confirmed', source: '人工确认 · 2026-11-15' },
        ],
      },
      {
        id: 'c-3',
        name: '邓雅琳',
        company: '博瑞精密机械（常州）',
        email: 'deng.yalin@example.test',
        phone: '+86 000-0000-0003',
        source: '行业展会',
        tags: ['重点', 'MES 数据采集'],
        memories: [
          { id: 'm-5', text: '供应链总监，关注设备 OEE 数据采集覆盖率与交付周期是否可控', status: 'confirmed', source: '会话提取 · 2026-11-14' },
          { id: 'm-6', text: '采购审批约 5 个工作日，需提前提供技术协议与验收标准附件', status: 'candidate', source: '待审核候选记忆 · 来自跟进纪要' },
        ],
      },
      {
        id: 'c-4',
        name: '梁振东',
        company: '华凯新能源装备（东莞）',
        email: 'liang.zhendong@example.test',
        phone: '+86 000-0000-0004',
        source: '渠道伙伴推荐',
        tags: ['重点', '非标整线'],
        memories: [
          { id: 'm-7', text: '厂长拍板，但 IT 部要求生产数据不出厂，需评估私有化部署与数据隔离方案', status: 'confirmed', source: '人工确认 · 2026-11-12' },
        ],
      },
      {
        id: 'c-5',
        name: '罗晓彤',
        company: '力拓五金制品（佛山）',
        email: 'luo.xiaotong@example.test',
        phone: '+86 000-0000-0005',
        source: '行业沙龙',
        tags: ['已签约'],
        memories: [
          { id: 'm-8', text: '已签约冲压线视觉检测一期，计划下季度扩展到 2 条新产线', status: 'confirmed', source: '合同归档 · 2026-11-10' },
        ],
      },
    ],
    leads: [
      { id: 'l-1', title: '孙启航 — 焊点视觉质检改造', stage: 'new', valueCents: 36800000, contactId: 'c-1', tags: ['待跟进'], staleHours: 4, owner: '马民浩' },
      { id: 'l-2', title: '何嘉宁 — AGV 年度维保', stage: 'contacted', valueCents: 12600000, contactId: 'c-2', tags: ['待跟进'], staleHours: 18, owner: '马民浩' },
      { id: 'l-3', title: '邓雅琳 — MES 设备数据采集', stage: 'proposal', valueCents: 48500000, contactId: 'c-3', tags: ['重点客户'], staleHours: 52, owner: '马民浩' },
      { id: 'l-4', title: '梁振东 — 电芯模组非标整线', stage: 'proposal', valueCents: 92000000, contactId: 'c-4', tags: ['重点客户'], staleHours: 76, owner: '马民浩' },
      { id: 'l-5', title: '罗晓彤 — 冲压线视觉检测一期', stage: 'won', valueCents: 21000000, contactId: 'c-5', tags: ['已成交'], staleHours: 0, owner: '马民浩' },
    ],
    tasks: [
      { id: 't-1', title: '回访孙启航：确认焊点缺陷类型与节拍要求', dueLabel: '已逾期 2 小时', priority: 'urgent', status: 'pending', contactId: 'c-1', leadId: 'l-1' },
      { id: 't-2', title: '复核邓雅琳的 MES 采集点位清单', dueLabel: '3 小时后到期', priority: 'high', status: 'in_progress', contactId: 'c-3', leadId: 'l-3' },
      { id: 't-3', title: '跟进梁振东非标整线私有化部署评估', dueLabel: '明天 18:00', priority: 'medium', status: 'pending', contactId: 'c-4', leadId: 'l-4' },
      { id: 't-4', title: '整理何嘉宁的 AGV 故障工单记录', dueLabel: '昨天已完成', priority: 'low', status: 'done', contactId: 'c-2', leadId: 'l-2' },
    ],
    conversations: [
      {
        id: 'conv-1',
        contactId: 'c-1',
        leadId: 'l-1',
        channel: '企业微信',
        status: 'human',
        unread: 1,
        time: '10:22',
        preview: '演示客户：我想直接和工程师沟通，请不要让机器人继续回复。',
        messages: [
          { id: 'msg-1', type: 'inbound', sender: '孙启航', text: '你好，我们焊装线想上视觉质检，一期预算 35 到 40 万，节拍要求 6 秒一件，想了解交付周期。', time: '10:15' },
          { id: 'msg-2', type: 'outbound', sender: 'ForgeLink 助手', text: '孙工您好！焊点视觉质检（含光源相机选型、PLC 对接与现场调试）常规交付周期 6–8 周，具体以最新规格书 v3.2 与现场勘察为准。下周二先给您两套选型方案对比可以吗？', time: '10:16', badge: '引用知识库 · 规格书 v3.2' },
          { id: 'msg-3', type: 'inbound', sender: '孙启航', text: '我想直接和工程师沟通，请不要让机器人继续回复。另外我只有工作日上午 9:30 到 11:30 方便接电话。', time: '10:22' },
          { id: 'msg-4', type: 'handoff', text: '触发人工接管护栏：客户明确要求人工沟通，已自动静默 AI 回复并同步提取客户记忆候选。', time: '10:22' },
          { id: 'msg-5', type: 'note', sender: '系统记忆提示', text: '检测到客户约束：「仅工作日 9:30–11:30 接听电话」「拒绝机器人自动回复」。已加入客户记忆并阻塞自动外发。', time: '10:22' },
        ],
      },
      {
        id: 'conv-2',
        contactId: 'c-3',
        leadId: 'l-3',
        channel: '邮件',
        status: 'ai',
        unread: 0,
        time: '14:05',
        preview: '好的，麻烦把技术协议和验收标准也一并发我，我同步给采购预审。',
        messages: [
          { id: 'msg-21', type: 'inbound', sender: '邓雅琳', text: 'MES 数据采集方案整体方向没问题，我们采购审批大概需要 5 个工作日。', time: '13:58' },
          { id: 'msg-22', type: 'outbound', sender: 'ForgeLink 助手', text: '收到邓总，考虑到 5 个工作日的采购审批周期，我这边先为您整理技术协议与验收标准附件，由客户经理确认后发送。', time: '14:00', badge: '读取已确认记忆 · OEE 采集覆盖率' },
          { id: 'msg-23', type: 'inbound', sender: '邓雅琳', text: '好的，麻烦把技术协议和验收标准也一并发我，我同步给采购预审。', time: '14:05' },
        ],
      },
      {
        id: 'conv-3',
        contactId: 'c-4',
        leadId: 'l-4',
        channel: '企业微信',
        status: 'human',
        unread: 2,
        time: '昨天',
        preview: '我们 IT 部要求生产数据不出厂，你们能做私有化部署吗？',
        messages: [
          { id: 'msg-31', type: 'inbound', sender: '梁振东', text: '整线报价我们内部初审过了，交期你们写的 60 天，另外 IT 部要求生产数据不出厂，你们能做私有化部署吗？', time: '昨天 17:40' },
          { id: 'msg-32', type: 'note', sender: 'Agent 诊断建议', text: '该商机金额 ¥920,000 且停滞超过 72 小时；非标交付周期 60 天，超过 45 天阈值，已挂起自动建议，转售前架构师评审后再人工回访。', time: '昨天 17:42' },
        ],
      },
      {
        id: 'conv-4',
        contactId: 'c-2',
        leadId: 'l-2',
        channel: '电话纪要',
        status: 'ai',
        unread: 0,
        time: '11-16',
        preview: 'WMS 的接口文档我已经转给信息科了。',
        messages: [
          { id: 'msg-41', type: 'inbound', sender: '何嘉宁', text: 'WMS 的接口文档我已经转给信息科了，周四给你反馈对接排期。', time: '11-16 11:20' },
          { id: 'msg-42', type: 'outbound', sender: 'ForgeLink 助手', text: '好的何经理！已为您登记周四跟进提醒，接口联调有问题随时联系我们。', time: '11-16 11:21' },
        ],
      },
    ],
    templates: [
      { id: 'tpl-1', title: '视觉质检标准方案与周期', category: '售前报价', content: '您好，焊点 / 外观视觉质检标准方案交付周期 6–8 周，含光源相机选型、PLC 对接、现场调试与操作培训；技术参数以最新规格书版本为准。' },
      { id: 'tpl-2', title: '技术协议与验收标准说明', category: '商务合规', content: '随信附上技术协议模板与验收标准（检出率、误判率测试方法与样本量），方便贵司采购与工艺团队预审。' },
      { id: 'tpl-3', title: '工程师接管致意', category: '人工转接', content: '您好，我是负责贵司项目的应用工程师，接下来由我直接跟进，请问工作日上午 9:30 后方便通话吗？' },
    ],
    agenda: [
      { id: 'ag-1', title: '孙启航 · 焊点质检需求电话沟通', time: '明天 09:30 - 10:00', owner: '马民浩', channel: '电话（遵循仅 9:30–11:30 偏好）', status: '已预约' },
      { id: 'ag-2', title: '邓雅琳 · MES 采集技术协议答疑', time: '明天 14:00 - 14:45', owner: '马民浩', channel: '腾讯会议', status: '待确认' },
      { id: 'ag-3', title: '梁振东 · 非标整线售前架构评审', time: '周五 15:00 - 16:00', owner: '马民浩', channel: '现场勘察', status: '已预约' },
    ],
    orgRules: [
      { id: 'rule-1', title: '技术参数必须引用最新规格书', body: '对客回复中出现节拍、精度、检出率等技术参数时，必须引用知识库中最新版本规格书，旧版本或已下架文档一律不得引用。', source: '系统内置规则 v4', status: 'active' },
      { id: 'rule-2', title: '非标交付超 45 天挂起转人工', body: '非标设备或整线交付周期超过 45 天的商机，Agent 不得自行给出交期承诺，必须挂起并转售前架构师评审。', source: '售前评审规范', status: 'active' },
      { id: 'rule-3', title: '严格遵循客户时间窗口约束', body: '若客户记忆中存在明确联系时段限制（如「仅工作日 9:30–11:30」），所有跟进排期提案不得落在禁区时段内。', source: '客户记忆闭环', status: 'active' },
      { id: 'rule-4', title: '业务口径以本体论语义层为准', body: '统计高价值停滞商机、转化率或回访优先级前，必须先调用 ontology_check_answerable 校验口径可回答性，禁止模型臆造 SQL。', source: '本体论规范', status: 'active' },
    ],
  };
};

window.DEMO_SCENARIOS = [
  {
    id: 'ontology-stalled',
    title: '本体论查询：核对高价值停滞商机并生成跟进方案',
    prompt: '基于业务本体论核对高价值停滞商机与客户记忆，生成可执行跟进方案（先校验口径再读取）。',
    agent: '商机诊断 Agent',
    steps: [
      {
        name: '1. ontology_search_terms',
        status: 'ok',
        detail: { query: '高价值停滞商机', matchedTerms: ['deal.stalled_high_value', 'deal.value_cents', 'conversation.last_inbound_at'] },
      },
      {
        name: '2. ontology_check_answerable',
        status: 'full',
        detail: { ontologyVersion: '1.0.0', answerability: 'full', role: 'ontology_reader (read-only)', visibility: 'org_scoped_rls' },
      },
      {
        name: '3. ontology_query (只读语义执行)',
        status: 'ok',
        detail: { template: 'stalled_deals_with_memory_v1', rowCount: 2, rowLimit: 50, rows: ['梁振东 — 电芯模组非标整线 (¥920,000, 停滞 76h)', '邓雅琳 — MES 设备数据采集 (¥485,000, 停滞 52h)'] },
      },
    ],
    evidence: {
      status: 'full',
      ontologyVersion: '1.0.0',
      scope: '演示工作区 (0dae91cc)',
      visibility: '全量可见漏斗 · 行列隔离角色 ontology_reader',
      relations: 'crm_leads → contacts → customer_memories',
      sources: 'crm_leads, crm_stages, org_memory_entries',
      template: 'stalled_deals_with_memory_v1 · 2 条（上限 50 条）',
    },
    reply: '已完成语义核验与只读查询，发现 2 笔高价值停滞商机：\n1. 梁振东 — 电芯模组非标整线（¥920,000，停滞 76 小时）：客户 IT 部要求生产数据不出厂；交付周期 60 天超过 45 天阈值，需先转售前架构师评审，Agent 不给交期承诺。\n2. 邓雅琳 — MES 设备数据采集（¥485,000，停滞 52 小时）：待补充技术协议与验收标准附件，以配合 5 个工作日采购审批。\n\n已为您生成可撤销的跟进任务提案，等待审批后写入 CRM。',
    proposal: {
      id: 'prop-ontology-1',
      title: '创建高优先级跟进任务并标记评审材料准备',
      summary: '为「梁振东 — 电芯模组非标整线」生成售前架构评审与私有化部署说明任务；为「邓雅琳 — MES 设备数据采集」生成技术协议发送任务（不直接外发消息）。',
      actionType: 'create_tasks_batch',
      tasksToAdd: [
        { title: '提交梁振东整线方案给售前架构师评审（含私有化部署说明）', dueLabel: '今天 17:30', priority: 'urgent', contactId: 'c-4', leadId: 'l-4' },
      ],
    },
  },
  {
    id: 'memory-boundary',
    title: '客户记忆闭环：准备孙启航回访建议（含约束冲突检查）',
    prompt: '查看孙启航的客户记忆与最近会话，起草一份不触犯偏好的回访计划。',
    agent: '记忆整理 Agent',
    steps: [
      {
        name: '1. memory_retrieve (客户记忆读取)',
        status: 'ok',
        detail: { contact: '孙启航', confirmedCount: 2, candidateCount: 1, constraints: ['仅工作日 9:30–11:30 电话沟通', '拒绝机器人自动外呼', '一期预算上限 ¥40 万'] },
      },
      {
        name: '2. ontology_describe_outcome (验收边界检查)',
        status: 'ok',
        detail: { inboundIsConsent: false, outboundAllowed: false, reason: '客户在会话中要求人工沟通，禁止自动外发' },
      },
    ],
    evidence: {
      status: 'partial',
      ontologyVersion: '1.0.0',
      scope: '联系人孙启航 (c-1)',
      visibility: '已确认记忆 2 条 · 待审候选 1 条',
      relations: 'contacts → conversations → customer_memories',
      sources: 'customer_memories, conversations',
      template: 'contact_memory_context_v1 · 3 条（上限 20 条）',
    },
    reply: '根据孙启航的已确认客户记忆：\n- 联系窗口：仅工作日 9:30–11:30，且禁止机器人自动外呼；\n- 预算约束：一期上限 ¥40 万（当前商机 ¥368,000 在区间内），停线改造窗口不超过 48 小时。\n\n同时发现 1 条待审核候选记忆：「希望下周二前拿到两套光源与相机选型方案对比」。建议由应用工程师在明天 9:30 的预约电话中确认选型偏好。',
    proposal: {
      id: 'prop-memory-1',
      title: '确认候选记忆并安排明天 9:30 人工回访任务',
      summary: '将「下周二前提供两套选型方案对比」转为已确认记忆，并保持自动外发静默状态。',
      actionType: 'confirm_memory',
      contactId: 'c-1',
      memoryId: 'm-3',
    },
  },
];
