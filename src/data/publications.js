const publications = [
  {
    title:
      "SecAgentSched: Secure agentic LLM scheduling for privacy-preserving UAV operations",

    journal: "Computer and Electrical Engineering (Elsevier)",

    year: "2027",

    description: "Research on privacy preserving operations on UAVs using LLMs",

    abstract:
      "UAV fleets are increasingly directed through natural-language missions rather than pre-scripted waypoints, yet existing agentic schedulers expose sensitive telemetry to untrusted clouds and cannot guarantee that LLM-generated plans respect battery, deadline, and airspace limits. This paper presents SecAgentSched, a secure agentic framework that encodes security policy as a first-class schedulability constraint, enforces a token-level exposure budget before every external inference call, and closes the loop with a deterministic verifier, LLM-driven repair, and mixed-integer linear programming (MILP) fallback. A four-agent architecture (Mission Interpreter, Constraint Validator, Schedule Synthesizer, Security Auditor) integrates differential privacy, selective AES-256-GCM encryption, and tamper-evident audit logs within a zero-trust edge enclave. We formulate a security-aware multi-UAV scheduling problem with explicit UAV- and station-indexed MEC offloading variables, prove six formal security properties, and evaluate nine baselines over 200 emulated-LLM episodes. A 60-episode live-LLM pilot (Llama-3.2-3B on a Jetson Orin Nano; GPT-4o-mini via cloud API) confirms end-to-end operation: both models achieve 100% task-extraction accuracy and 100% final feasibility through the verifier and MILP fallback. SecAgentSched achieves 100% schedule feasibility, a 98.5% reduction in restricted-token exposure, 0% adversarial success on 200 taxonomy injections, and only 0.5 s additional latency over LLM+Verifier.",

    paperLink:
      "https://www.sciencedirect.com/science/article/pii/S0045790626006683",

    featured: true,
  },
  {
    title:
      "GA-TMC: A Meta-heuristic Approach for Co-scheduling Tasks and Messages on Shared Bus-Based Heterogeneous Platforms",

    journal: "Journal of Systems Architecture (Elsevier)",

    year: "2026",

    description:
      "Research on optimisation strategies for task and message co-scheduling in heterogeneous systems.",

    abstract:
      "Heterogeneous distributed platforms are increasingly utilized for cyber–physical workloads, where complex application logic is represented via Directed Acyclic Task Graphs (DTGs). This paper addresses the challenge of contention-aware co-scheduling for task and message nodes within DTGs across heterogeneous processing units linked by a shared-bus architecture. We introduce GA-TMC, a Genetic Algorithm-based framework designed for joint task and message scheduling. By combining the structural feasibility of baseline heuristics with the global optimization capabilities of evolutionary operators, GA-TMC utilizes a real-valued chromosome encoding scheme for processor, bus, and sequence assignments. A specialized decoding mechanism maintains strict precedence constraints through the use of dynamic Candidate Task and Message Sets. The GA engine iteratively refines these mappings to minimize makespan under communication contention. The proposed framework is evaluated against state-of-the-art contention-aware heuristics, where it achieves makespan improvements of up to 26%. In addition, comparative analysis with competitive metaheuristic schedulers, namely Differential Evolution (DE), Grey Wolf Optimizer (GWO), Enhanced Genetic Algorithm for Task Scheduling (EGA-TS), and Hybrid Heuristic and Genetic-based Task Scheduling Algorithm for Heterogeneous Computing (HHG) demonstrates that GA-TMC consistently attains superior or comparable makespan performance while exhibiting lower runtime overhead under identical contention-aware modeling assumptions. A detailed scalability study across diverse benchmark DTGs further examines runtime overhead and search efficiency. The results highlight the effectiveness of GA-TMC in balancing solution quality and computational scalability under increasing workload complexity. Furthermore, a case study involving an automotive traction control system validates the framework’s efficacy for practical, real-world cyber–physical applications.",

    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S1383762126001530",

    featured: true,
  },
];

export default publications;
