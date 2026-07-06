const activeSubmissions = [
  {
    title: "Online Peer Support Use Among Informal Caregivers of People Living With Alzheimer Disease or Related Dementias: National Cross-Sectional Web-Based Survey",
    authors: "Congning Ni, Lantian Xia, Lijun Song, Qingxia Chen, Sean S. Huang, Bradley Malin, Zhijun Yin",
    venue: "JMIR Aging",
    date: "Submitted May 5, 2026",
    status: "Under review"
  },
  {
    title: "Auditable Concept Learning for Interpretable Prediction from Longitudinal Clinical Text",
    authors: "Congning Ni, Weixin Liu, Qingyuan Song, Bradley Malin, Zhijun Yin",
    venue: "Conference manuscript",
    date: "Submitted June 30, 2026",
    status: "Double-blind review",
    blind: true
  },
  {
    title: "Coverage-Controlled Preference Mining from Noisy Claim Verification for Evidence-Grounded Generation",
    authors: "Weixin Liu, Congning Ni, Qingyuan Song, Susannah Leigh Rose, Murat Kantarcioglu, Bradley A. Malin, Zhijun Yin",
    venue: "ACML 2026",
    date: "Submitted July 3, 2026 · revised July 6, 2026",
    status: "Under review",
    url: "https://openreview.net/forum?id=TMfZW11tZD"
  },
  {
    title: "Characterizing Medication Evidence Across Clinical Notes and Structured EHR History",
    authors: "Mingyang Jiang, Congning Ni, Weixin Liu, Zhijun Yin",
    venue: "Biomedical informatics conference manuscript",
    date: "Submitted July 2026",
    status: "Double-blind review",
    blind: true
  },
  {
    title: "CoRA: Confidence–Rationale Alignment for Reliable Chain-of-Thought Reasoning",
    authors: "Juming Xiong, Weixin Liu, Kevin H. Guo, Congning Ni, Junchao Zhu, Chongyu Qu, Chao Yan, Katherine Brown, Avinash Baidya, Xiang Gao, Bradley A. Malin, Zhijun Yin",
    venue: "ACL Rolling Review, May 2026 cycle",
    date: "Submitted May 26, 2026",
    status: "Under review",
    url: "https://openreview.net/forum?id=vub7Jh8iFI"
  },
  {
    title: "Vectors Are Not Neutral: Sensitive-Information Inference from Exported LLM Representations in Summarization",
    authors: "Weixin Liu, Bowen Qu, Juming Xiong, Congning Ni, Bradley A. Malin, Zhijun Yin",
    venue: "ACL Rolling Review, May 2026 cycle",
    date: "Submitted May 25, 2026",
    status: "Under review",
    url: "https://openreview.net/forum?id=1gjPrnt6uJ"
  },
  {
    title: "Learning When to Sample: Confidence-Aware Selective Sampling for Efficient Chain-of-Thought Reasoning",
    authors: "Juming Xiong, Kevin H. Guo, Congning Ni, Weixin Liu, Chao Yan, Katherine Brown, Avinash Baidya, Xiang Gao, Bradley A. Malin, Zhijun Yin",
    venue: "ACL Rolling Review, May 2026 cycle",
    date: "Submitted May 25, 2026",
    status: "Under review",
    url: "https://openreview.net/forum?id=LSzpSbhk2k"
  },
  {
    title: "A Multi-Stakeholder Benchmark for Hallucination and Omission Detection in Mental Health Chatbot Responses",
    authors: "Khizar Hussain, Bradley A. Malin, Congning Ni, Laurie Lovett Novak, Shelagh A. Mulvaney, Susannah Leigh Rose, Zhijun Yin, Murat Kantarcioglu",
    venue: "NeurIPS 2026 Evaluations and Datasets Track",
    date: "Submitted May 4, 2026",
    status: "Under review",
    url: "https://openreview.net/forum?id=EjLWkSuIlM"
  }
];

const publications = [
  {
    year: 2026,
    title: "Disentangling Prompt Element Level Risk Factors for Hallucinations and Omissions in Mental Health LLM Responses",
    venue: "AMIA 2026 Annual Symposium, accepted full paper",
    type: "conference",
    status: "accepted",
    links: [{label: "OpenReview", url: "https://openreview.net/forum?id=dgTh0MYNVP"}]
  },
  {
    year: 2026,
    title: "Making LLM Predictions Interpretable: Fine-Tuning GPT-4o for Early Discontinuation of Cancer Medication",
    venue: "Studies in Health Technology and Informatics, 336, 750–754",
    type: "conference",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.3233/SHTI260271"}]
  },
  {
    year: 2026,
    title: "One Question, Four Voices: How Advice for Alzheimer’s Caregiving Differs Between Caregivers, Clinicians, and Large Language Models",
    venue: "CSCW 2026, accepted",
    type: "conference",
    status: "accepted",
    links: []
  },
  {
    year: 2026,
    title: "Beyond the Response: Examining Reasoning and Execution Fidelity in Large Language Models for Mental Health",
    venue: "ACM FAccT 2026, accepted",
    type: "conference",
    status: "accepted",
    links: []
  },
  {
    year: 2026,
    title: "MHGraphBench: Knowledge Graph-Grounded Benchmarking of Mental Health Knowledge in Large Language Models",
    venue: "GEM 2026 Workshop, accepted poster",
    type: "preprint",
    status: "accepted",
    links: []
  },
  {
    year: 2025,
    title: "Catalysts of Conversation: Examining Interaction Dynamics Between Topic Initiators and Commentors in Alzheimer’s Disease Online Communities",
    venue: "Proceedings of the ACM Web Conference 2025, 4913–4924",
    type: "conference",
    status: "accepted",
    links: [
      {label: "DOI", url: "https://doi.org/10.1145/3696410.3714736"},
      {label: "arXiv", url: "https://arxiv.org/abs/2412.13388"}
    ]
  },
  {
    year: 2025,
    title: "Decoding Student Insights: Analyzing Response Change in NAEP Mathematics Constructed Response Items",
    venue: "International Electronic Journal of Elementary Education, 17(2), 237–252",
    type: "journal",
    status: "accepted",
    links: [{label: "Scholar", url: "https://scholar.google.com/scholar?q=Decoding+Student+Insights+Analyzing+Response+Change+in+NAEP+Mathematics+Constructed+Response+Items"}]
  },
  {
    year: 2025,
    title: "Examining Online Caregiving Discussions Across Racial Groups of Informal Alzheimer’s Disease Caregivers",
    venue: "Studies in Health Technology and Informatics, 329, 2094–2095",
    type: "conference",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.3233/SHTI251366"}]
  },
  {
    year: 2025,
    title: "Using Large Language Model for Efficient Extraction of Treatment Discontinuation Information: A Study of Online Breast Cancer Community Posts",
    venue: "Artificial Intelligence in Medicine 2025, 379–383",
    type: "conference",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.1007/978-3-031-95841-0_70"}]
  },
  {
    year: 2024,
    title: "Sentiment Dynamics Among Informal Caregivers in Web-Based Alzheimer Communities: Systematic Analysis of Emotional Support and Interaction Patterns",
    venue: "JMIR Aging, 7, e60050",
    type: "journal",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.2196/60050"}]
  },
  {
    year: 2024,
    title: "Applications and Concerns of ChatGPT and Other Conversational Large Language Models in Health Care: Systematic Review",
    venue: "Journal of Medical Internet Research, 26, e22769",
    type: "journal",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.2196/22769"}]
  },
  {
    year: 2024,
    title: "Perceptions and Utilization of Online Peer Support Among Informal Dementia Caregivers: Survey Study",
    venue: "JMIR Aging, 7, e55169",
    type: "journal",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.2196/55169"}]
  },
  {
    year: 2024,
    title: "Examining Oral Anti-Cancer Medication Continuation Using Questionnaires, Prescription Refills, and Structured Electronic Health Records",
    venue: "AMIA Annual Symposium Proceedings, 865–874",
    type: "conference",
    status: "accepted",
    links: [{label: "Scholar", url: "https://scholar.google.com/scholar?q=Examining+Oral+Anti-Cancer+Medication+Continuation+Using+Questionnaires+Prescription+Refills+and+Structured+Electronic+Health+Records"}]
  },
  {
    year: 2024,
    title: "Fatigue, Pain, and Medication: Mining Online Posts Regarding Rheumatoid Arthritis From Reddit",
    venue: "AMIA Annual Symposium Proceedings, 754–763",
    type: "conference",
    status: "accepted",
    links: [{label: "Scholar", url: "https://scholar.google.com/scholar?q=Fatigue+Pain+and+Medication+Mining+Online+Posts+Regarding+Rheumatoid+Arthritis+From+Reddit"}]
  },
  {
    year: 2024,
    title: "Optimizing Word Embeddings for Patient Portal Message Datasets with a Small Number of Samples",
    venue: "Research Square preprint",
    type: "preprint",
    status: "preprint",
    links: [{label: "Scholar", url: "https://scholar.google.com/scholar?q=Optimizing+Word+Embeddings+for+Patient+Portal+Message+Datasets+with+a+Small+Number+of+Samples"}]
  },
  {
    year: 2023,
    title: "Examining Online Behaviors of Adult-Child and Spousal Caregivers for People Living With Alzheimer Disease or Related Dementias: Comparative Study in an Open Online Community",
    venue: "Journal of Medical Internet Research, 25, e48193",
    type: "journal",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.2196/48193"}]
  },
  {
    year: 2023,
    title: "Examining Rural and Urban Sentiment Difference in COVID-19–Related Topics on Twitter: Word Embedding–Based Retrospective Study",
    venue: "Journal of Medical Internet Research, 25, e42985",
    type: "journal",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.2196/42985"}]
  },
  {
    year: 2023,
    title: "The Hidden Patient Connections: Predicting Hormonal Therapy Medication Discontinuation Using Hypergraph Neural Network on Clinical Communications",
    venue: "AMIA Summits on Translational Science Proceedings, 505–514",
    type: "conference",
    status: "accepted",
    links: [{label: "Scholar", url: "https://scholar.google.com/scholar?q=The+Hidden+Patient+Connections+Predicting+Hormonal+Therapy+Medication+Discontinuation+Using+Hypergraph+Neural+Network+on+Clinical+Communications"}]
  },
  {
    year: 2022,
    title: "The Public Perception of the #GeneEditedBabies Event Across Multiple Social Media Platforms: Observational Study",
    venue: "Journal of Medical Internet Research, 24(3), e31687",
    type: "journal",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.2196/31687"}]
  },
  {
    year: 2022,
    title: "Implicit Incentives Among Reddit Users to Prioritize Attention Over Privacy and Reveal Their Faces When Discussing Direct-to-Consumer Genetic Test Results: Topic and Attention Analysis",
    venue: "JMIR Infodemiology, 2(2), e35702",
    type: "journal",
    status: "accepted",
    links: [{label: "DOI", url: "https://doi.org/10.2196/35702"}]
  },
  {
    year: 2022,
    title: "“Rough Day... Need a Hug”: Learning Challenges and Experiences of the Alzheimer’s Disease and Related Dementia Caregivers on Reddit",
    venue: "Proceedings of the International AAAI Conference on Web and Social Media, 16(1), 711–722",
    type: "conference",
    status: "accepted",
    links: [{label: "Scholar", url: "https://scholar.google.com/scholar?q=Rough+Day+Need+a+Hug+Learning+Challenges+and+Experiences+of+the+Alzheimer%27s+Disease+and+Related+Dementia+Caregivers+on+Reddit"}]
  },
  {
    year: 2022,
    title: "Predicting Hormonal Therapy Medication Discontinuation for Breast Cancer Patients Using Structured Data in Electronic Medical Records",
    venue: "AMIA Summits on Translational Science Proceedings, 359–368",
    type: "conference",
    status: "accepted",
    links: [{label: "Scholar", url: "https://scholar.google.com/scholar?q=Predicting+Hormonal+Therapy+Medication+Discontinuation+for+Breast+Cancer+Patients+Using+Structured+Data+in+Electronic+Medical+Records"}]
  },
  {
    year: 2022,
    title: "Detecting Personal Health Mentions from Social Media Using Supervised Machine Learning",
    venue: "Personal Health Informatics: Patient Participation in Precision Health, Springer, 247–266",
    type: "chapter",
    status: "accepted",
    links: [{label: "Scholar", url: "https://scholar.google.com/scholar?q=Detecting+Personal+Health+Mentions+from+Social+Media+Using+Supervised+Machine+Learning"}]
  }
];

const activities = [
  {
    date: "2026",
    type: "Research highlight",
    title: "Selected for Vanderbilt Health’s Aliquots research briefs",
    description: "VUMC News & Communications selected the study on interpretable GPT-4o prediction of cancer medication discontinuation for forthcoming institutional coverage."
  },
  {
    date: "2026",
    type: "Invited presentation",
    title: "Vanderbilt Interdisciplinary Alzheimer’s Disease Journal Club",
    description: "Invited presenter and discussion leader on early Alzheimer’s disease prediction using longitudinal EHR data, hosted by VMAC and VADRC.",
    links: [{label: "Article", url: "https://www.nature.com/articles/s43856-025-01206-w"}]
  },
  {
    date: "2026",
    type: "Peer review",
    title: "ACL Rolling Review reviewer",
    description: "Completed six reviews in the May 2026 cycle, extending peer-review service in NLP, clinical language technology, and LLM reasoning."
  },
  {
    date: "2022–2026",
    type: "Academic service",
    title: "Peer reviewer for 23+ unique manuscripts",
    description: "Review service across JMIR publications, ACM CHI, ICWSM, The Web Conference, ACL Rolling Review, and ACM Web Science; includes journal re-reviews and conference program service."
  },
  {
    date: "2023–2024",
    type: "Program committee",
    title: "ACM Web Science Program Committee member",
    description: "Served on the regular-paper program committees for ACM Web Science 2023 and 2024."
  },
  {
    date: "2025",
    type: "Scientific presentation",
    title: "AMIA 2025 Annual Symposium",
    description: "Presented performance evaluation of GPT-4o and traditional machine learning for cancer medication discontinuation prediction.",
    links: [{label: "Paper", url: "https://doi.org/10.3233/SHTI260271"}]
  },
  {
    date: "2025",
    type: "Scientific presentation",
    title: "IMIA MedInfo 2025",
    description: "Presented research on online caregiving discussions across racial groups of informal Alzheimer’s disease caregivers.",
    links: [{label: "Paper", url: "https://doi.org/10.3233/SHTI251366"}]
  },
  {
    date: "2025",
    type: "Scientific presentation",
    title: "The ACM Web Conference 2025",
    description: "Presented Catalysts of Conversation, a study of interaction dynamics in Alzheimer’s disease online communities.",
    links: [{label: "Paper", url: "https://doi.org/10.1145/3696410.3714736"}]
  }
];
