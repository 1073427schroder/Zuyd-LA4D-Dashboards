import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const modules = [
      {
        id: 0,
        name: 'Logica 1',
        description: 'De basis van logisch denken',
        goal: 'Logische statements beoordelen op juistheid',
        learningOutcome: 'Logisch beredeneren',
        semester: 1,
        schoolyear: '2017/2018'
      },
      {
        id: 1,
        name: 'Internet of Things',
        description: 'Het ontwerpen en ontwikkelen van Internet of Things applicaties',
        goal: 'Kennis op doen van de Internet of Things technologie',
        learningOutcome: 'Relevante technologien',
        semester: 2,
        schoolyear: '2017/2018'
      },
      {
        id: 2,
        name: 'Intelligent Systems',
        description: 'Het ontwerpen en ontwikkelen van intelligente, zelf lerende systemen',
        goal: 'Kennis op doen van Kunstmatige Intelligentie',
        learningOutcome: 'Relevante technologien',
        semester: 3,
        schoolyear: '2017/2018'
      },
      {
        id: 3,
        name: 'Architectural Patterns',
        description: 'Architectuur in het business-, applicatie- en infrastructuur-perspectief',
        goal: 'De verschillende aspecten van architectuur begrijpen',
        learningOutcome: 'Architectureel denken',
        semester: 4,
        schoolyear: '2017/2018'
      }
    ];

    const indicators = {
      studyModuleId: 3,
      indicators: [
        {
          pi: 5,
          description: "De student toont in de casus aan dat hij kan werken binnen en volgens het architectuur raamwerk. Hij toont hierbij aan dat hij de analyse rondom de bedrijfs-, applicatie-, en infrastructuurarchitectuur zelfstandig kan uitvoeren, dit gestandaardiseerd kan modelleren, en kan onderbouwen",
          product: "Architectuurrapport",
          criteria: "",
          instructions: "",
          aspects: [
            {
              aspect: "Analyse (principes)",
              description: "De analyse betreffende bedrijfs-, applicatie-, en infrastructuurarchitectuur is uitgevoerd op basis van de juiste principes en gestructureerd uitgevoerd en correct (stapgewijs) beschreven",
              txt2: "Analyses zijn slechts gedeeltelijk uitgevoerd en stappen zijn de niet correct beschreven",
              txt4: "Analyses zijn slechts gedeeltelijk uitgevoerd en de stappen zijn onvoldoende beschreven",
              txt6: "Analyses zijn goed uitgevoerd, maar niet alle relevante principes zijn meegenomen en de stappen zijn onvoldoende beschreven",
              txt8: "Analyses zijn volledig, maar niet overal correct de analyse stappen doorlopen",
              txt10: "Analyses zijn volledig en correct",
              weight: 1
            },
            {
              aspect: "Onderbouwing",
              description: "De onderbouwingen voor de gemaakte keuzes en beslissingen zijn aanwezig, relevant en indien nodig voorzien van bronverwijzingen",
              txt2: "Onderbouwingen zijn erg zwak",
              txt4: "Onderbouwingen zijn matig",
              txt6: "Onderbouwingen zijn voldoende",
              txt8: "Onderbouwingen zijn goed",
              txt10: "Onderbouwingen zijn zeer goed",
              weight: 1
            }
          ]
        },
        {
          pi: 7,
          description: "De student laat zien dat hij zelfstandig, op basis van best practices, deelcases rondom bedrijfs, applicatie, en infrastructuur architectuur kan analyseren en verwerken in de aangedragen Archimate tool",
          product: "Archimate repository",
          criteria: "",
          instructions: "",
          aspects: [
            {
              aspect: "Volledigheid (principes)",
              description: "Vijf architectuurprincipes per architectuurlaag, conform het TOGAF sjabloon. Volledigheid komt ook tot uiting in de relatie naar de bedrijfsdoelstellingen.",
              txt2: "Principes zijn erg zwak uitgewerkt",
              txt4: "Principes zijn matig uitgewerkt",
              txt6: "Principes zijn voldoende uitgewerkt",
              txt8: "Alle principes zijn aanwezig en goed uitgewerkt",
              txt10: "Alle principes zijn aanwezig en goed uitgewerkt",
              weight: 1
            },
            {
              aspect: "Consistentie (modellen)",
              description: "Minimale omvang van 5 architmate elementen per architectuurlaag, waarbij de elementen en relaties zijn gebruikt conform het vereenvoudigd archimate metamodel. Semantisch zijn de architectuurlagen samenhangend.",
              txt2: "Modellen zijn erg zwak uitgewerkt",
              txt4: "Modellen zijn matig uitgewerkt",
              txt6: "Modellen zijn voldoende uitgewerkt",
              txt8: "Alle elementen zijn in de modellen verwerkt en goed uitgewerkt",
              txt10: "Alle elementten zijn in de modellen verwerkt, goed uitgewerkt, en de semantische samenhang is aanwezig.",
              weight: 1
            }
          ]
        }
      ]
    };


    let indicatorsT = {
      "AP1_01": {
        "indicators": {
          "5": {
            "ai": "5",
            "aspects": [{
              "aspect": "Analyse (principes)",
              "description": "De analyse betreffende bedrijfs-, applicatie-, en infrastructuurarchitectuur is uitgevoerd op basis van de juiste principes en gestructureerd uitgevoerd en correct (stapgewijs) beschreven",
              "txt10": "Analyses zijn volledig en correct",
              "txt2": "Analyses zijn slechts gedeeltelijk uitgevoerd en stappen zijn de niet correct beschreven",
              "txt4": "Analyses zijn slechts gedeeltelijk uitgevoerd en de stappen zijn onvoldoende beschreven",
              "txt6": "Analyses zijn goed uitgevoerd, maar niet alle relevante principes zijn meegenomen en de stappen zijn onvoldoende beschreven",
              "txt8": "Analyses zijn volledig, maar niet overal correct de analyse stappen doorlopen",
              "weight": 1
            }, {
              "aspect": "Onderbouwing",
              "description": "De onderbouwingen voor de gemaakte keuzes en beslissingen zijn aanwezig, relevant en indien nodig voorzien van bronverwijzingen",
              "txt10": "Onderbouwingen zijn zeer goed",
              "txt2": "Onderbouwingen zijn erg zwak",
              "txt4": "Onderbouwingen zijn matig",
              "txt6": "Onderbouwingen zijn voldoende",
              "txt8": "Onderbouwingen zijn goed",
              "weight": 1
            }],
            "criteria": "",
            "description": "De student toont in de casus aan dat hij kan werken binnen en volgens het architectuur raamwerk. Hij toont hierbij aan dat hij de analyse rondom de bedrijfs-, applicatie-, en infrastructuurarchitectuur zelfstandig kan uitvoeren, dit gestandaardiseerd kan modelleren, en kan onderbouwen",
            "instructions": "",
            "product": "Architectuurrapport"
          },
          "7": {
            "ai": "7",
            "aspects": [{
              "aspect": "Volledigheid (principes)",
              "description": "Vijf architectuurprincipes per architectuurlaag, conform het TOGAF sjabloon. Volledigheid komt ook tot uiting in de relatie naar de bedrijfsdoelstellingen.",
              "txt10": "Alle principes zijn aanwezig en goed uitgewerkt",
              "txt2": "Principes zijn erg zwak uitgewerkt",
              "txt4": "Principes zijn matig uitgewerkt",
              "txt6": "Principes zijn voldoende uitgewerkt",
              "txt8": "Alle principes zijn aanwezig en goed uitgewerkt",
              "weight": 1
            }, {
              "aspect": "Consistentie (modellen)",
              "description": "Minimale omvang van 5 architmate elementen per architectuurlaag, waarbij de elementen en relaties zijn gebruikt conform het vereenvoudigd archimate metamodel. Semantisch zijn de architectuurlagen samenhangend.",
              "txt10": "Alle elementten zijn in de modellen verwerkt, goed uitgewerkt, en de semantische samenhang is aanwezig.",
              "txt2": "Modellen zijn erg zwak uitgewerkt",
              "txt4": "Modellen zijn matig uitgewerkt",
              "txt6": "Modellen zijn voldoende uitgewerkt",
              "txt8": "Alle elementen zijn in de modellen verwerkt en goed uitgewerkt",
              "weight": 1
            }],
            "criteria": "",
            "description": "De student laat zien dat hij zelfstandig, op basis van best practices, deelcases rondom bedrijfs, applicatie, en infrastructuur architectuur kan analyseren en verwerken in de aangedragen Archimate tool",
            "instructions": "",
            "product": "Archimate repository"
          }
        },
        "studyModuleId": "AP1_01"
      },
      "IOT1_01": {
        "indicators": {
          "5": {
            "ai": "5",
            "aspects": [{
              "aspect": "Analyse (principes)",
              "description": "De analyse betreffende bedrijfs-, applicatie-, en infrastructuurarchitectuur is uitgevoerd op basis van de juiste principes en gestructureerd uitgevoerd en correct (stapgewijs) beschreven",
              "txt10": "Analyses zijn volledig en correct",
              "txt2": "Analyses zijn slechts gedeeltelijk uitgevoerd en stappen zijn de niet correct beschreven",
              "txt4": "Analyses zijn slechts gedeeltelijk uitgevoerd en de stappen zijn onvoldoende beschreven",
              "txt6": "Analyses zijn goed uitgevoerd, maar niet alle relevante principes zijn meegenomen en de stappen zijn onvoldoende beschreven",
              "txt8": "Analyses zijn volledig, maar niet overal correct de analyse stappen doorlopen",
              "weight": 1
            }, {
              "aspect": "Onderbouwing",
              "description": "De onderbouwingen voor de gemaakte keuzes en beslissingen zijn aanwezig, relevant en indien nodig voorzien van bronverwijzingen",
              "txt10": "Onderbouwingen zijn zeer goed",
              "txt2": "Onderbouwingen zijn erg zwak",
              "txt4": "Onderbouwingen zijn matig",
              "txt6": "Onderbouwingen zijn voldoende",
              "txt8": "Onderbouwingen zijn goed",
              "weight": 1
            }],
            "criteria": "",
            "description": "Internet Of Things PI's PI 5",
            "instructions": "",
            "product": "IOT rapport"
          }
        },
        "studyModuleId": "IOT1_01"
      },
      "IS1_01": {
        "indicators": {
          "5": {
            "ai": "5",
            "aspects": [{
              "aspect": "Analyse (principes)",
              "description": "De analyse betreffende bedrijfs-, applicatie-, en infrastructuurarchitectuur is uitgevoerd op basis van de juiste principes en gestructureerd uitgevoerd en correct (stapgewijs) beschreven",
              "txt10": "Analyses zijn volledig en correct",
              "txt2": "Analyses zijn slechts gedeeltelijk uitgevoerd en stappen zijn de niet correct beschreven",
              "txt4": "Analyses zijn slechts gedeeltelijk uitgevoerd en de stappen zijn onvoldoende beschreven",
              "txt6": "Analyses zijn goed uitgevoerd, maar niet alle relevante principes zijn meegenomen en de stappen zijn onvoldoende beschreven",
              "txt8": "Analyses zijn volledig, maar niet overal correct de analyse stappen doorlopen",
              "weight": 1
            }, {
              "aspect": "Onderbouwing",
              "description": "De onderbouwingen voor de gemaakte keuzes en beslissingen zijn aanwezig, relevant en indien nodig voorzien van bronverwijzingen",
              "txt10": "Onderbouwingen zijn zeer goed",
              "txt2": "Onderbouwingen zijn erg zwak",
              "txt4": "Onderbouwingen zijn matig",
              "txt6": "Onderbouwingen zijn voldoende",
              "txt8": "Onderbouwingen zijn goed",
              "weight": 1
            }],
            "criteria": "",
            "description": "Intelligent Systems PI's PI 5",
            "instructions": "",
            "product": "Intelligent Systems rapport"
          }
        },
        "studyModuleId": "IS1_01"
      },
      "LOG1_01": {
        "indicators": {
          "5": {
            "ai": "5",
            "aspects": [{
              "aspect": "Analyse (principes)",
              "description": "De analyse betreffende bedrijfs-, applicatie-, en infrastructuurarchitectuur is uitgevoerd op basis van de juiste principes en gestructureerd uitgevoerd en correct (stapgewijs) beschreven",
              "txt10": "Analyses zijn volledig en correct",
              "txt2": "Analyses zijn slechts gedeeltelijk uitgevoerd en stappen zijn de niet correct beschreven",
              "txt4": "Analyses zijn slechts gedeeltelijk uitgevoerd en de stappen zijn onvoldoende beschreven",
              "txt6": "Analyses zijn goed uitgevoerd, maar niet alle relevante principes zijn meegenomen en de stappen zijn onvoldoende beschreven",
              "txt8": "Analyses zijn volledig, maar niet overal correct de analyse stappen doorlopen",
              "weight": 1
            }, {
              "aspect": "Onderbouwing",
              "description": "De onderbouwingen voor de gemaakte keuzes en beslissingen zijn aanwezig, relevant en indien nodig voorzien van bronverwijzingen",
              "txt10": "Onderbouwingen zijn zeer goed",
              "txt2": "Onderbouwingen zijn erg zwak",
              "txt4": "Onderbouwingen zijn matig",
              "txt6": "Onderbouwingen zijn voldoende",
              "txt8": "Onderbouwingen zijn goed",
              "weight": 1
            }],
            "criteria": "",
            "description": "Logica 1 PI's PI 5",
            "instructions": "",
            "product": "Logica rapport"
          }
        },
        "studyModuleId": "LOG1_01"
      }
    };

    let modulesT = {
      "AP1_01": {
        "description": "Architectuur in het business-, applicatie- en infrastructuur-perspectief",
        "goal": "De verschillende aspecten van architectuur begrijpen",
        "id": "AP1_01",
        "learningOutcome": "Architectureel denken",
        "name": "Architectural Patterns",
        "schoolyear": "2017/2018",
        "semester": 4
      },
      "IOT1_01": {
        "description": "Het ontwerpen en ontwikkelen van Internet of Things applicaties",
        "goal": "Kennis op doen van de Internet of Things technologie",
        "id": "IOT1_01",
        "learningOutcome": "Relevante technologieën",
        "name": "Internet of Things",
        "schoolyear": "2017/2018",
        "semester": 2
      },
      "IS1_01": {
        "description": "Het ontwerpen en ontwikkelen van intelligente, zelf lerende systemen",
        "goal": "Kennis op doen van Kunstmatige Intelligentie",
        "id": "IS1_01",
        "learningOutcome": "Relevante technologieën",
        "name": "Intelligent Systems",
        "schoolyear": "2017/2018",
        "semester": 3
      },
      "LOG1_01": {
        "description": "De basis van logisch denken",
        "goal": "Logische statements beoordelen op juistheid",
        "id": "LOG1_01",
        "learningOutcome": "Logisch beredeneren",
        "name": "Logica 1",
        "schoolyear": "2017/2018",
        "semester": 1
      }
    };



    return { modules, indicators, modulesT, indicatorsT };
  }
}
