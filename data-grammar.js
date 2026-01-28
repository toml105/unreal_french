 Nous N'avons PAS faim."
    ]
  },
  
  other_patterns: [
    {pattern: "ne ... plus", meaning: "no longer / no more", example: "Je NE fume PLUS. (I no longer smoke)"},
    {pattern: "ne ... jamais", meaning: "never", example: "Elle NE ment JAMAIS. (She never lies)"},
    {pattern: "ne ... rien", meaning: "nothing", example: "Je NE vois RIEN. (I see nothing)"},
    {pattern: "ne ... personne", meaning: "nobody", example: "Je NE connais PERSONNE. (I know nobody)"},
    {pattern: "ne ... que", meaning: "only", example: "Je N'ai QUE 5 euros. (I only have 5 euros)"},
    {pattern: "ne ... ni ... ni", meaning: "neither ... nor", example: "Je N'aime NI le thé NI le café."},
    {pattern: "ne ... aucun(e)", meaning: "not any / none", example: "Je N'ai AUCUNE idée. (I have no idea)"}
  ],
  
  special_cases: {
    passe_compose: {
      rule: "Ne goes before auxiliary, pas after auxiliary",
      examples: ["Je n'ai PAS mangé. (I didn't eat)", "Elle n'est PAS venue. (She didn't come)"]
    },
    infinitive: {
      rule: "Both parts go BEFORE the infinitive",
      examples: ["Je préfère NE PAS sortir. (I prefer not to go out)", "Il m'a dit de NE RIEN faire."]
    },
    with_pronouns: {
      rule: "Pronouns stay between ne and verb",
      examples: ["Je NE le vois PAS. (I don't see him)", "Elle NE lui parle PLUS."]
    }
  },
  
  tip: "In spoken French, 'ne' is often dropped: 'Je sais pas' instead of 'Je ne sais pas'. But always use both parts in writing!",
  
  quiz_items: [
    {q: "Je ___ comprends ___. (I don't understand)", a: "ne...pas", type: "fill"},
    {q: "Elle ___ vient ___ ici. (She never comes here)", a: "ne...jamais", type: "fill"},
    {q: "Il ___ y a ___ dans le frigo. (There's nothing in the fridge)", a: "n'...rien", type: "fill"},
    {q: "Je ___ fume ___. (I no longer smoke)", a: "ne...plus", type: "fill"}
  ]
},

// ============================================
// QUESTIONS
// ============================================
questions: {
  title: "Question Formation",
  intro: "There are three main ways to form yes/no questions in French, plus question words for information questions.",
  
  yes_no: {
    title: "Yes/No Questions",
    methods: [
      {
        method: "Intonation (informal)",
        rule: "Raise your voice at the end",
        example: "Tu viens? (You're coming?)"
      },
      {
        method: "Est-ce que (standard)",
        rule: "Add 'Est-ce que' at the beginning",
        example: "Est-ce que tu viens? (Are you coming?)"
      },
      {
        method: "Inversion (formal)",
        rule: "Invert subject and verb with hyphen",
        example: "Viens-tu? (Are you coming?)",
        notes: [
          "Add -t- between two vowels: Parle-t-il? A-t-elle fini?",
          "With nouns, add pronoun: Marie vient-elle?"
        ]
      }
    ]
  },
  
  question_words: [
    {word: "qui", meaning: "who", examples: ["Qui parle?", "Qui est-ce?", "À qui parles-tu?"]},
    {word: "que / qu'", meaning: "what", examples: ["Que fais-tu?", "Qu'est-ce que tu fais?", "Qu'est-ce que c'est?"]},
    {word: "quoi", meaning: "what (after preposition)", examples: ["À quoi penses-tu?", "De quoi parles-tu?"]},
    {word: "où", meaning: "where", examples: ["Où habites-tu?", "D'où viens-tu?"]},
    {word: "quand", meaning: "when", examples: ["Quand arrives-tu?", "Depuis quand?"]},
    {word: "comment", meaning: "how", examples: ["Comment vas-tu?", "Comment dit-on...?"]},
    {word: "pourquoi", meaning: "why", examples: ["Pourquoi pleures-tu?", "Pourquoi pas?"]},
    {word: "combien", meaning: "how much/many", examples: ["Combien ça coûte?", "Combien de temps?"]},
    {word: "quel/quelle/quels/quelles", meaning: "which/what", examples: ["Quel livre?", "Quelle heure est-il?", "Quels films aimes-tu?"]}
  ],
  
  quiz_items: [
    {q: "___ t'appelles-tu? (What is your name?)", a: "Comment", type: "fill"},
    {q: "___ habites-tu? (Where do you live?)", a: "Où", type: "fill"},
    {q: "___ heure est-il? (What time is it?)", a: "Quelle", type: "fill"},
    {q: "___ est-ce que tu fais? (What are you doing?)", a: "Qu'", type: "fill"}
  ]
},

// ============================================
// VERBS - TENSES
// ============================================
tenses: {
  title: "French Verb Tenses",
  intro: "Understanding when to use each tense is crucial for fluency.",
  
  present: {
    title: "Present Tense (Le Présent)",
    uses: [
      "Current actions: Je mange. (I am eating / I eat)",
      "Habitual actions: Je travaille le lundi. (I work on Mondays)",
      "General truths: La terre tourne. (The earth turns)",
      "Near future (with context): Je pars demain. (I leave tomorrow)"
    ],
    regular_er: {
      verb: "parler (to speak)",
      conjugation: ["je parle", "tu parles", "il/elle parle", "nous parlons", "vous parlez", "ils/elles parlent"],
      endings: ["-e", "-es", "-e", "-ons", "-ez", "-ent"]
    },
    regular_ir: {
      verb: "finir (to finish)",
      conjugation: ["je finis", "tu finis", "il/elle finit", "nous finissons", "vous finissez", "ils/elles finissent"],
      endings: ["-is", "-is", "-it", "-issons", "-issez", "-issent"]
    },
    regular_re: {
      verb: "vendre (to sell)",
      conjugation: ["je vends", "tu vends", "il/elle vend", "nous vendons", "vous vendez", "ils/elles vendent"],
      endings: ["-s", "-s", "-", "-ons", "-ez", "-ent"]
    }
  },
  
  passe_compose: {
    title: "Passé Composé (Compound Past)",
    formation: "avoir/être (present) + past participle",
    uses: [
      "Completed actions in the past",
      "Actions with clear beginning/end",
      "Specific events"
    ],
    with_avoir: {
      rule: "Most verbs use avoir",
      example: "J'ai mangé. (I ate / I have eaten)",
      past_participles: {
        "-er → -é": "parlé, mangé, aimé",
        "-ir → -i": "fini, choisi, réussi",
        "-re → -u": "vendu, attendu, répondu"
      }
    },
    with_etre: {
      rule: "DR MRS VANDERTRAMP verbs + all reflexives use être",
      verbs: "Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir",
      agreement: "Past participle agrees with subject",
      examples: [
        "Elle est allée. (She went) - feminine -e",
        "Ils sont partis. (They left) - masculine plural -s",
        "Elles sont venues. (They came) - feminine plural -es"
      ]
    },
    reflexive: {
      rule: "All reflexive verbs use être",
      example: "Je me suis levé(e). (I got up)",
      agreement: "Agrees with subject (usually)"
    },
    irregular_participles: [
      {infinitive: "être", participle: "été"},
      {infinitive: "avoir", participle: "eu"},
      {infinitive: "faire", participle: "fait"},
      {infinitive: "prendre", participle: "pris"},
      {infinitive: "mettre", participle: "mis"},
      {infinitive: "voir", participle: "vu"},
      {infinitive: "pouvoir", participle: "pu"},
      {infinitive: "vouloir", participle: "voulu"},
      {infinitive: "devoir", participle: "dû"},
      {infinitive: "savoir", participle: "su"},
      {infinitive: "lire", participle: "lu"},
      {infinitive: "écrire", participle: "écrit"},
      {infinitive: "dire", participle: "dit"},
      {infinitive: "boire", participle: "bu"},
      {infinitive: "venir", participle: "venu"},
      {infinitive: "tenir", participle: "tenu"},
      {infinitive: "mourir", participle: "mort"},
      {infinitive: "naître", participle: "né"},
      {infinitive: "ouvrir", participle: "ouvert"},
      {infinitive: "offrir", participle: "offert"},
      {infinitive: "connaître", participle: "connu"},
      {infinitive: "croire", participle: "cru"},
      {infinitive: "vivre", participle: "vécu"},
      {infinitive: "suivre", participle: "suivi"},
      {infinitive: "conduire", participle: "conduit"},
      {infinitive: "recevoir", participle: "reçu"}
    ]
  },
  
  imparfait: {
    title: "Imparfait (Imperfect)",
    formation: "Take nous form of present, remove -ons, add imperfect endings",
    endings: ["-ais", "-ais", "-ait", "-ions", "-iez", "-aient"],
    example: {
      verb: "parler",
      stem: "parl- (from parlons)",
      conjugation: ["je parlais", "tu parlais", "il parlait", "nous parlions", "vous parliez", "ils parlaient"]
    },
    exception: "être has irregular stem: ét- (j'étais, tu étais, etc.)",
    uses: [
      "Descriptions in the past: Il faisait beau. (The weather was nice)",
      "Habitual past actions: Je mangeais là tous les jours. (I used to eat there every day)",
      "Ongoing actions interrupted: Je dormais quand il a appelé. (I was sleeping when he called)",
      "Background information: Elle avait 20 ans. (She was 20 years old)",
      "Simultaneous actions: Pendant qu'il lisait, elle cuisinait."
    ]
  },
  
  passe_compose_vs_imparfait: {
    title: "Passé Composé vs. Imparfait",
    comparison: [
      {passe_compose: "Completed action", imparfait: "Ongoing/habitual action"},
      {passe_compose: "Specific event", imparfait: "Background/description"},
      {passe_compose: "What happened", imparfait: "What was happening"},
      {passe_compose: "Interrupting action", imparfait: "Interrupted action"}
    ],
    examples: [
      "Quand j'étais (IMP) jeune, j'allais (IMP) souvent à la plage.",
      "Hier, je suis allé (PC) à la plage.",
      "Je dormais (IMP) quand le téléphone a sonné (PC).",
      "Il pleuvait (IMP) mais nous sommes sortis (PC)."
    ]
  },
  
  futur_simple: {
    title: "Future Simple (Le Futur Simple)",
    formation: "Infinitive + future endings (drop -e for -re verbs)",
    endings: ["-ai", "-as", "-a", "-ons", "-ez", "-ont"],
    regular_examples: [
      {verb: "parler", conjugation: ["je parlerai", "tu parleras", "il parlera", "nous parlerons", "vous parlerez", "ils parleront"]},
      {verb: "finir", conjugation: ["je finirai", "tu finiras", "il finira", "nous finirons", "vous finirez", "ils finiront"]},
      {verb: "vendre", conjugation: ["je vendrai", "tu vendras", "il vendra", "nous vendrons", "vous vendrez", "ils vendront"]}
    ],
    irregular_stems: [
      {verb: "être", stem: "ser-", example: "je serai"},
      {verb: "avoir", stem: "aur-", example: "j'aurai"},
      {verb: "faire", stem: "fer-", example: "je ferai"},
      {verb: "aller", stem: "ir-", example: "j'irai"},
      {verb: "venir", stem: "viendr-", example: "je viendrai"},
      {verb: "voir", stem: "verr-", example: "je verrai"},
      {verb: "pouvoir", stem: "pourr-", example: "je pourrai"},
      {verb: "vouloir", stem: "voudr-", example: "je voudrai"},
      {verb: "devoir", stem: "devr-", example: "je devrai"},
      {verb: "savoir", stem: "saur-", example: "je saurai"},
      {verb: "envoyer", stem: "enverr-", example: "j'enverrai"}
    ],
    uses: [
      "Future events: Je partirai demain. (I will leave tomorrow)",
      "Predictions: Il pleuvra. (It will rain)",
      "Promises: Je t'appellerai. (I will call you)"
    ]
  },
  
  futur_proche: {
    title: "Near Future (Le Futur Proche)",
    formation: "aller (present) + infinitive",
    examples: [
      "Je vais manger. (I'm going to eat)",
      "Elle va partir. (She's going to leave)",
      "Nous allons voir un film. (We're going to see a movie)"
    ],
    uses: "Immediate or planned future actions. More conversational than futur simple."
  },
  
  conditionnel: {
    title: "Conditional (Le Conditionnel)",
    formation: "Future stem + imperfect endings",
    endings: ["-ais", "-ais", "-ait", "-ions", "-iez", "-aient"],
    examples: [
      {verb: "parler", conjugation: ["je parlerais", "tu parlerais", "il parlerait", "nous parlerions", "vous parleriez", "ils parleraient"]},
      {verb: "être", conjugation: ["je serais", "tu serais", "il serait", "nous serions", "vous seriez", "ils seraient"]},
      {verb: "avoir", conjugation: ["j'aurais", "tu aurais", "il aurait", "nous aurions", "vous auriez", "ils auraient"]}
    ],
    uses: [
      "Polite requests: Je voudrais un café. (I would like a coffee)",
      "Hypothetical situations: Si j'avais de l'argent, j'achèterais une maison.",
      "Giving advice: Tu devrais étudier. (You should study)",
      "Reported speech: Il a dit qu'il viendrait. (He said he would come)"
    ]
  },
  
  subjonctif: {
    title: "Subjunctive (Le Subjonctif)",
    intro: "Used after certain expressions of doubt, emotion, desire, necessity, and judgment.",
    formation: "ils/elles present stem + subjunctive endings",
    endings: ["-e", "-es", "-e", "-ions", "-iez", "-ent"],
    trigger_expressions: [
      "Il faut que (it's necessary that)",
      "Je veux que (I want)",
      "J'aimerais que (I would like)",
      "Il est important que (it's important that)",
      "Je suis content(e) que (I'm happy that)",
      "J'ai peur que (I'm afraid that)",
      "Bien que / Quoique (although)",
      "Avant que (before)",
      "Pour que / Afin que (so that)"
    ],
    examples: [
      "Il faut que tu viennes. (You must come)",
      "Je veux qu'il fasse ses devoirs. (I want him to do his homework)",
      "Je suis content qu'elle soit là. (I'm happy she's here)"
    ],
    irregular: [
      {verb: "être", forms: "que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient"},
      {verb: "avoir", forms: "que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient"},
      {verb: "aller", forms: "que j'aille, que tu ailles, qu'il aille, que nous allions, que vous alliez, qu'ils aillent"},
      {verb: "faire", forms: "que je fasse, que tu fasses, qu'il fasse, que nous fassions, que vous fassiez, qu'ils fassent"},
      {verb: "pouvoir", forms: "que je puisse, que tu puisses, qu'il puisse, que nous puissions, que vous puissiez, qu'ils puissent"},
      {verb: "savoir", forms: "que je sache, que tu saches, qu'il sache, que nous sachions, que vous sachiez, qu'ils sachent"}
    ]
  }
},

// ============================================
// SI CLAUSES (IF/THEN)
// ============================================
si_clauses: {
  title: "Si Clauses (If/Then Sentences)",
  intro: "French has specific tense sequences for conditional sentences.",
  
  types: [
    {
      type: "Real/Likely (Present)",
      si_clause: "Si + présent",
      main_clause: "présent / futur / impératif",
      examples: [
        "Si tu viens, je serai content. (If you come, I'll be happy)",
        "Si il pleut, nous restons à la maison. (If it rains, we stay home)",
        "Si tu as faim, mange! (If you're hungry, eat!)"
      ]
    },
    {
      type: "Hypothetical (Present)",
      si_clause: "Si + imparfait",
      main_clause: "conditionnel présent",
      examples: [
        "Si j'avais de l'argent, j'achèterais une voiture. (If I had money, I would buy a car)",
        "Si elle était là, elle nous aiderait. (If she were here, she would help us)"
      ]
    },
    {
      type: "Hypothetical (Past)",
      si_clause: "Si + plus-que-parfait",
      main_clause: "conditionnel passé",
      examples: [
        "Si j'avais su, je serais venu. (If I had known, I would have come)",
        "Si tu avais étudié, tu aurais réussi. (If you had studied, you would have passed)"
      ]
    }
  ],
  
  warning: "NEVER use futur or conditionnel directly after 'si' in a condition clause!"
},

// ============================================
// COMPARATIVES & SUPERLATIVES
// ============================================
comparatives: {
  title: "Comparatives & Superlatives",
  
  comparative: {
    title: "Comparatives",
    types: [
      {type: "more...than", pattern: "plus + adj/adv + que", example: "Il est plus grand que moi. (He is taller than me)"},
      {type: "less...than", pattern: "moins + adj/adv + que", example: "Elle est moins grande que lui. (She is less tall than him)"},
      {type: "as...as", pattern: "aussi + adj/adv + que", example: "Je suis aussi grand que toi. (I am as tall as you)"}
    ]
  },
  
  superlative: {
    title: "Superlatives",
    types: [
      {type: "the most", pattern: "le/la/les plus + adj", example: "C'est le plus grand. (It's the biggest)"},
      {type: "the least", pattern: "le/la/les moins + adj", example: "C'est le moins cher. (It's the least expensive)"}
    ],
    note: "Adjective agrees with noun: la plus belle fille, les plus grands bâtiments"
  },
  
  irregular: [
    {adj: "bon (good)", comparative: "meilleur(e)", superlative: "le/la meilleur(e)", note: "never 'plus bon'"},
    {adj: "bien (well)", comparative: "mieux", superlative: "le mieux", note: "adverb"},
    {adj: "mauvais (bad)", comparative: "pire / plus mauvais", superlative: "le/la pire"},
    {adj: "petit (small)", comparative: "plus petit / moindre", superlative: "le/la plus petit(e) / le/la moindre", note: "moindre = abstract"}
  ]
},

// ============================================
// PREPOSITIONS
// ============================================
prepositions: {
  title: "Prepositions",
  
  location: [
    {prep: "à", uses: "at, to, in (cities)", examples: ["à Paris", "à l'école", "au bureau (à + le)"]},
    {prep: "en", uses: "in (feminine countries, continents, months)", examples: ["en France", "en Europe", "en janvier"]},
    {prep: "au/aux", uses: "in (masculine/plural countries)", examples: ["au Japon", "aux États-Unis"]},
    {prep: "dans", uses: "in, inside, into", examples: ["dans la maison", "dans 5 minutes"]},
    {prep: "sur", uses: "on, about", examples: ["sur la table", "un livre sur l'histoire"]},
    {prep: "sous", uses: "under", examples: ["sous la table"]},
    {prep: "devant", uses: "in front of", examples: ["devant la maison"]},
    {prep: "derrière", uses: "behind", examples: ["derrière la porte"]},
    {prep: "entre", uses: "between", examples: ["entre toi et moi"]},
    {prep: "chez", uses: "at someone's place, at the office of", examples: ["chez moi", "chez le médecin"]}
  ],
  
  time: [
    {prep: "à", uses: "at (time)", examples: ["à 8 heures", "à midi"]},
    {prep: "de...à", uses: "from...to", examples: ["de 9h à 17h"]},
    {prep: "pendant", uses: "during, for (duration)", examples: ["pendant les vacances", "pendant 2 heures"]},
    {prep: "depuis", uses: "since, for (ongoing)", examples: ["depuis lundi", "depuis 3 ans"]},
    {prep: "pour", uses: "for (intended duration)", examples: ["pour 2 semaines"]},
    {prep: "avant", uses: "before", examples: ["avant le dîner"]},
    {prep: "après", uses: "after", examples: ["après le travail"]}
  ],
  
  countries_rule: {
    title: "Prepositions with Countries",
    rules: [
      "Feminine countries (most ending in -e): en France, en Italie, en Chine",
      "Masculine countries: au Japon, au Canada, au Mexique",
      "Plural countries: aux États-Unis, aux Pays-Bas",
      "Islands often use à: à Cuba, à Madagascar"
    ]
  }
},

// ============================================
// RELATIVE PRONOUNS
// ============================================
relative_pronouns: {
  title: "Relative Pronouns",
  intro: "Connect clauses and refer back to a noun.",
  
  pronouns: [
    {
      pronoun: "qui",
      function: "subject of relative clause",
      examples: ["L'homme qui parle est mon père. (The man who is speaking is my father)", "Le livre qui est sur la table... (The book that is on the table...)"]
    },
    {
      pronoun: "que / qu'",
      function: "direct object of relative clause",
      examples: ["Le livre que je lis est intéressant. (The book that I'm reading is interesting)", "L'homme qu'elle aime... (The man she loves...)"]
    },
    {
      pronoun: "dont",
      function: "replaces de + noun (of which/whom, whose)",
      examples: ["Le livre dont je parle... (The book I'm talking about)", "L'homme dont la fille est médecin... (The man whose daughter is a doctor)"]
    },
    {
      pronoun: "où",
      function: "place or time",
      examples: ["La ville où je suis né... (The city where I was born)", "Le jour où il est parti... (The day when he left)"]
    }
  ],
  
  tip: "qui = subject (no subject after), que = object (subject follows)"
}

};
