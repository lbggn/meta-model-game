db = db.getSiblingDB('metaModelGame');  // Utiliser ou créer la base de données "metaModelGame"

db.phrases.insertMany([
  // Omission: Suppression simple
  {
    text: "Je suis fatigué.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Fatigué de quoi exactement ?"
  },
  {
    text: "Il est parti.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Où est-il parti ?"
  },
  {
    text: "Ils ont tout réglé.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Qui exactement a réglé quoi ?"
  },
  {
    text: "Elle a fait ce qu'il fallait.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Qu'est-ce que ‘ce qu’il fallait’ veut dire ici ?"
  },
  {
    text: "C’est mieux comme ça.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Mieux pour qui et pourquoi ?"
  },
  {
    text: "Je le savais.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Que savais-tu exactement ?"
  },
  {
    text: "Il a bien fait.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Qu’est-ce qu'il a bien fait ?"
  },
  {
    text: "C’est dangereux.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Qu’est-ce qui est dangereux exactement ?"
  },
  {
    text: "Je vais arrêter.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Arrêter quoi précisément ?"
  },
  {
    text: "Ils ont décidé.",
    category: "Omission",
    subCategory: "Suppression simple",
    question: "Qui a décidé quoi ?"
  },

  // Omission: Manque d'index référentiel
  {
    text: "C’est inacceptable.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Pour qui est-ce inacceptable ?"
  },
  {
    text: "Ils ne s’entendent pas.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Qui sont-ils exactement ?"
  },
  {
    text: "Tout le monde le sait.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Qui est ce ‘tout le monde’ ?"
  },
  {
    text: "On m’a dit que c’était impossible.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Qui t’a dit cela ?"
  },
  {
    text: "C’est évident.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Évident pour qui exactement ?"
  },
  {
    text: "Ils disent que c'est dangereux.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Qui sont 'ils' et sur quoi se basent-ils ?"
  },
  {
    text: "C’est bien connu.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Connu par qui ?"
  },
  {
    text: "Ils croient que ça va marcher.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Qui sont ‘ils’ et pourquoi pensent-ils cela ?"
  },
  {
    text: "C’est normal.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Qui considère cela normal ?"
  },
  {
    text: "Les gens disent ça tout le temps.",
    category: "Omission",
    subCategory: "Manque d'index référentiel",
    question: "Quels gens disent ça exactement ?"
  },

  // Omission: Manque du comparatif
  {
    text: "C’est mieux.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Mieux que quoi ?"
  },
  {
    text: "Il est plus efficace.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Plus efficace que qui ou quoi ?"
  },
  {
    text: "Ce projet est plus urgent.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Plus urgent que quel autre projet ?"
  },
  {
    text: "Elle est plus qualifiée.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Plus qualifiée que qui ?"
  },
  {
    text: "C’est moins risqué.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Moins risqué que quoi ?"
  },
  {
    text: "Je suis plus concentré.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Concentré par rapport à quand ?"
  },
  {
    text: "Cette approche est plus simple.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Plus simple par rapport à quoi ?"
  },
  {
    text: "Il travaille plus vite.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Plus vite que qui ou quoi ?"
  },
  {
    text: "Je me sens plus confiant.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Confiant par rapport à quel autre moment ?"
  },
  {
    text: "Elle est moins compétente.",
    category: "Omission",
    subCategory: "Manque du comparatif",
    question: "Moins compétente que qui ?"
  },

  // Omission: Verbe non-spécifique
  {
    text: "Je dois réussir.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Réussir quoi précisément ?"
  },
  {
    text: "Ils ont aidé.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Comment ont-ils aidé exactement ?"
  },
  {
    text: "Je me suis amélioré.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Dans quoi t’es-tu amélioré précisément ?"
  },
  {
    text: "Elle a changé.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "De quelle manière a-t-elle changé ?"
  },
  {
    text: "Nous devons collaborer.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Comment devrions-nous collaborer exactement ?"
  },
  {
    text: "Ils ont réussi.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Réussi à faire quoi précisément ?"
  },
  {
    text: "Je vais essayer.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Essayer quoi exactement ?"
  },
  {
    text: "Ils ont proposé une solution.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Quelle solution ont-ils proposé ?"
  },
  {
    text: "Nous devons améliorer cela.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Comment devons-nous l'améliorer exactement ?"
  },
  {
    text: "Elle a décidé.",
    category: "Omission",
    subCategory: "Verbe non-spécifique",
    question: "Décidé de quoi précisément ?"
  },

  // Généralisation: Quantifieur universel
  {
    text: "Personne ne m’écoute.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Personne ? Pas même une seule personne ?"
  },
  {
    text: "Tout le monde fait ça.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Vraiment tout le monde ? Il n’y a aucune exception ?"
  },
  {
    text: "Je dois toujours faire attention.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Toujours ? Pas même une seule fois tu peux relâcher ta vigilance ?"
  },
  {
    text: "Ils ne se trompent jamais.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Jamais ? Pas même une seule fois ?"
  },
  {
    text: "Je dois tout faire.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Vraiment tout faire ?"
  },
  {
    text: "C’est toujours moi qui dois prendre l’initiative.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Toujours toi ? Il n'y a jamais personne d'autre ?"
  },
  {
    text: "Ils sont tous pareils.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Tous ? Pas une seule personne est différente ?"
  },
  {
    text: "Cela ne marche jamais.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Jamais ? Il n’y a jamais eu un cas où cela a fonctionné ?"
  },
  {
    text: "Je ne réussis jamais.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Jamais ? Pas une seule réussite dans ta vie ?"
  },
  {
    text: "Tous mes collègues sont paresseux.",
    category: "Généralisation",
    subCategory: "Quantifieur universel",
    question: "Tous tes collègues ? Il n’y en a pas un seul qui travaille bien ?"
  },

  // Généralisation: Origine perdue
{
  text: "Ça a toujours été comme ça.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a décidé que ça devait être ainsi ?"
},
{
  text: "C’est comme ça qu’on fait ici.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a décidé que c’est la bonne manière de faire ?"
},
{
  text: "Les choses ne changent jamais.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui t’a dit que ça ne pouvait pas changer ?"
},
{
  text: "On a toujours fait comme ça.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a commencé à faire ça de cette manière ?"
},
{
  text: "Il faut bien que quelqu'un le fasse.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a décidé que quelqu'un devait le faire ?"
},
{
  text: "C’est ainsi que cela doit être fait.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a déterminé que c’était la bonne méthode ?"
},
{
  text: "Ce sont les règles.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a établi ces règles ?"
},
{
  text: "C'est évident que ça doit être fait.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a dit que cela était évident ?"
},
{
  text: "Il n’y a pas d’alternative.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a dit qu'il n'y avait aucune alternative ?"
},
{
  text: "C'est comme ça que ça marche.",
  category: "Généralisation",
  subCategory: "Origine perdue",
  question: "Qui a décidé que ça devait marcher ainsi ?"
},

// Généralisation: Opérateurs modaux
{
  text: "Je dois réussir.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Qu’est-ce qui t’oblige à réussir ?"
},
{
  text: "Il faut que je fasse cela.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Pourquoi penses-tu que tu es obligé de le faire ?"
},
{
  text: "Je ne peux pas échouer.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Qu’est-ce qui t’empêche d’échouer ?"
},
{
  text: "Tu dois me croire.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Pourquoi est-ce si important que je te croie ?"
},
{
  text: "Je ne peux pas me permettre d’être en retard.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Qu’est-ce qui se passerait si tu étais en retard ?"
},
{
  text: "Il est impossible de réussir sans aide.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Qu’est-ce qui rend cela impossible ?"
},
{
  text: "Je dois toujours être parfait.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Pourquoi penses-tu que tu dois toujours être parfait ?"
},
{
  text: "On ne doit jamais baisser les bras.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Pourquoi ne doit-on jamais abandonner ?"
},
{
  text: "Tu ne peux pas changer d’avis maintenant.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Qu’est-ce qui t’empêche de changer d’avis ?"
},
{
  text: "Il faut respecter les délais.",
  category: "Généralisation",
  subCategory: "Opérateurs modaux",
  question: "Qu’est-ce qui rend le respect des délais si crucial ?"
},

// Généralisation: Nominalisation
{
  text: "La motivation est essentielle.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Comment pourrais-tu transformer cette motivation en action concrète ?"
},
{
  text: "La réussite est difficile à atteindre.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Comment définis-tu exactement la réussite ici ?"
},
{
  text: "L’amélioration est nécessaire.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Quelles actions spécifiques pourraient mener à cette amélioration ?"
},
{
  text: "La communication est un problème.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Que faudrait-il changer dans la communication ?"
},
{
  text: "Le succès ne viendra pas sans effort.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Quelles actions spécifiques doivent être accomplies pour réussir ?"
},
{
  text: "La coopération est la clé.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Comment pourrais-tu décrire la coopération en termes d’actions ?"
},
{
  text: "Le bonheur est difficile à trouver.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Comment décrirais-tu le bonheur dans cette situation ?"
},
{
  text: "La négociation est en cours.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Quels éléments sont négociés ?"
},
{
  text: "L’innovation est essentielle.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Comment décrirais-tu une innovation dans ce contexte ?"
},
{
  text: "L’éducation est la clé du succès.",
  category: "Généralisation",
  subCategory: "Nominalisation",
  question: "Quels aspects de l'éducation sont essentiels ici ?"
},

// Distorsion: Lecture de pensée
{
  text: "Je sais qu’il ne m’aime pas.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment peux-tu être sûr de ce qu’il ressent ?"
},
{
  text: "Elle sait exactement ce que je pense.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment peux-tu être certain qu’elle sait ce que tu penses ?"
},
{
  text: "Ils ne me respectent pas.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment sais-tu qu'ils ne te respectent pas ?"
},
{
  text: "Il m’en veut.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment peux-tu être sûr qu’il t’en veut ?"
},
{
  text: "Tu penses que je suis incompétent.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment sais-tu que je pense cela ?"
},
{
  text: "Elle est en colère contre moi.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment sais-tu qu'elle est en colère contre toi ?"
},
{
  text: "Il pense que je suis stupide.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment sais-tu qu'il pense cela de toi ?"
},
{
  text: "Ils croient que je vais échouer.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment sais-tu qu'ils pensent cela ?"
},
{
  text: "Elle veut que j’échoue.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment peux-tu être sûr de ce qu'elle veut ?"
},
{
  text: "Il pense que je suis coupable.",
  category: "Distorsion",
  subCategory: "Lecture de pensée",
  question: "Comment sais-tu qu'il pense cela ?"
},

// Distorsion: Cause-effet
{
  text: "Tu me rends triste.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment ce que je fais te rend-il triste ?"
},
{
  text: "Il m’a fait perdre patience.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment son comportement t’a-t-il fait perdre patience ?"
},
{
  text: "Cette situation me stresse.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment cette situation te cause-t-elle du stress ?"
},
{
  text: "Tu me mets en colère.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment est-ce que je te mets en colère ?"
},
{
  text: "Il m’a démotivé.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment exactement a-t-il causé ta démotivation ?"
},
{
  text: "Elle m’empêche d’avancer.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment elle t'empêche exactement d’avancer ?"
},
{
  text: "Il me pousse à bout.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment est-ce qu'il te pousse à bout ?"
},
{
  text: "Ça m’énerve quand il fait ça.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment son comportement t'énerve-t-il ?"
},
{
  text: "Son attitude me déprime.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment son attitude te déprime-t-elle ?"
},
{
  text: "Il me fait douter de moi-même.",
  category: "Distorsion",
  subCategory: "Cause-effet",
  question: "Comment est-ce qu'il te fait douter de toi-même ?"
},

// Distorsion: Équivalence complexe
{
  text: "Il ne m'a pas appelé, donc il ne m'aime pas.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment l’absence d’un appel signifie-t-elle qu'il ne t’aime pas ?"
},
{
  text: "Elle ne m’a pas aidé, donc elle ne se soucie pas de moi.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment le fait qu’elle ne t’ait pas aidé prouve qu’elle ne se soucie pas de toi ?"
},
{
  text: "Il a fait une erreur, donc il est incompétent.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment une erreur peut-elle signifier qu'il est incompétent ?"
},
{
  text: "Elle ne sourit pas, donc elle est en colère contre moi.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment l’absence de sourire signifie-t-elle qu’elle est en colère contre toi ?"
},
{
  text: "Ils ne m’ont pas invité, donc ils ne m’aiment pas.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment le fait de ne pas être invité prouve-t-il qu’ils ne t’aiment pas ?"
},
{
  text: "Je ne suis pas bon dans ce travail, donc je ne réussirai jamais.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment une difficulté dans ce travail signifie-t-elle que tu ne réussiras jamais ?"
},
{
  text: "Il m’a ignoré, donc il me méprise.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment l’ignorance équivaut-elle au mépris ?"
},
{
  text: "Je n’ai pas été promu, donc je ne suis pas assez compétent.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment l’absence de promotion prouve-t-elle ton manque de compétence ?"
},
{
  text: "Elle n’a pas répondu à mon message, donc elle est en colère.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment l’absence de réponse prouve-t-elle qu’elle est en colère ?"
},
{
  text: "Il n’a pas fait ce que je lui ai demandé, donc il ne me respecte pas.",
  category: "Distorsion",
  subCategory: "Équivalence complexe",
  question: "Comment le fait de ne pas avoir suivi tes instructions prouve-t-il un manque de respect ?"
},

// Distorsion: Présupposé
{
  text: "Quand vas-tu enfin comprendre ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait penser que je ne comprends pas ?"
},
{
  text: "Pourquoi tu ne fais jamais ce qu’on te demande ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait dire que je ne fais jamais ce qu’on me demande ?"
},
{
  text: "Tu vas encore être en retard.",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait penser que je vais être en retard ?"
},
{
  text: "Pourquoi es-tu toujours aussi difficile ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait dire que je suis difficile ?"
},
{
  text: "Quand vas-tu arrêter de faire des erreurs ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait penser que je fais des erreurs ?"
},
{
  text: "Comment peux-tu encore penser à ça ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait croire que j’y pense encore ?"
},
{
  text: "Pourquoi tu refuses de voir la réalité ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait croire que je refuse de voir la réalité ?"
},
{
  text: "Qu’est-ce qui t’empêche de réussir ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait penser que quelque chose m’empêche de réussir ?"
},
{
  text: "Quand vas-tu apprendre à écouter ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait croire que je n’écoute pas ?"
},
{
  text: "Pourquoi es-tu toujours contre mes idées ?",
  category: "Distorsion",
  subCategory: "Présupposé",
  question: "Qu’est-ce qui te fait croire que je suis toujours contre tes idées ?"
}

]);
