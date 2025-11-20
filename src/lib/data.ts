import { Wine } from "./types";

export const wines: Wine[] = [
  {
    id: "riesling-2023",
    nazev: "Ryzlink rýnský",
    rocnik: 2023,
    odruda: "Ryzlink rýnský",
    vinarsvi: "Mayer Mikulov",
    oblast: "Mikulovsko, Jižní Morava",
    cena: 320,
    popis:
      "Minerální ryzlink s pikantní kyselinou a slanou dochutí. Hrozny z vápencových svahů, lisováno šetrně pneumaticky.",
    chut: "Šťavnatá meruňka, citrusy, lehká slanost a delší dochuť po limetce.",
    vune: "Bílé květy, limetová kůra, medové tóny.",
    pairing: "Ryby na másle, kozí sýr, sushi a lehké předkrmy.",
    parametry: { cukr: "7 g/l", kyseliny: "7,3 g/l", alkohol: "12 % obj." },
    obrazek:
      "https://images.unsplash.com/photo-1525295815900-25e0ea74a935?auto=format&fit=crop&w=800&q=80",
    vyber: true,
  },
  {
    id: "vltavin-2022",
    nazev: "Veltlínské zelené",
    rocnik: 2022,
    odruda: "Veltlínské zelené",
    vinarsvi: "Mayer Mikulov",
    oblast: "Pálava, Jižní Morava",
    cena: 280,
    popis:
      "Veltlín z vyšších poloh s pepřovým závěrem. Část ležela na jemných kalech pro větší krémovost.",
    chut: "Citrusy, zelené jablko, jemný bílý pepř a mandlová linka.",
    vune: "Broskev, lipový květ a lehká bylinná stopa.",
    pairing: "Kuřecí maso, svěží saláty, pečená zelenina a tapas.",
    parametry: { cukr: "5 g/l", kyseliny: "6,5 g/l", alkohol: "12,5 % obj." },
    obrazek:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinot-rose-2023",
    nazev: "Pinot Noir Rosé",
    rocnik: 2023,
    odruda: "Rulandské modré rosé",
    vinarsvi: "Mayer Mikulov",
    oblast: "Mikulovsko, Jižní Morava",
    cena: 290,
    popis:
      "Jemné rosé se sušším profilem a svěžestí ranních vinic. Lisováno po krátké maceraci pro jemnou barvu.",
    chut: "Lesní jahody, rybíz, šťavnatá kyselina a minerální konec.",
    vune: "Jahodový sorbet, růžové okvětní lístky.",
    pairing: "Letní saláty, paella, čerstvé těstoviny s pestem.",
    parametry: { cukr: "6 g/l", kyseliny: "6,8 g/l", alkohol: "12 % obj." },
    obrazek:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    vyber: true,
  },
  {
    id: "chardonnay-wood-2021",
    nazev: "Chardonnay Barrique",
    rocnik: 2021,
    odruda: "Chardonnay",
    vinarsvi: "Mayer Mikulov",
    oblast: "Dunajovické kopce, Jižní Morava",
    cena: 420,
    popis:
      "Elegantní chardonnay zrálo 8 měsíců v dubových sudech, krémová textura a jemné máslové tóny.",
    chut: "Pečené jablko, vanilka, lehký toast, dlouhá perzistence.",
    vune: "Máslová brioška, lískové oříšky, sušený ananas.",
    pairing:
      "Pečené kuře s bylinkami, telecí na smetaně, výraznější sýry s kůrou.",
    parametry: { cukr: "4 g/l", kyseliny: "6,2 g/l", alkohol: "13 % obj." },
    obrazek:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pálava-2023",
    nazev: "Pálava polosuchá",
    rocnik: 2023,
    odruda: "Pálava",
    vinarsvi: "Mayer Mikulov",
    oblast: "Pálava, Jižní Morava",
    cena: 340,
    popis:
      "Jemně aromatická Pálava s rovnováhou mezi zbytkovým cukrem a svěží kyselinou. Z vinic s kamenitou půdou.",
    chut: "Med a meruňky, lehká kořenitost, hebký závěr.",
    vune: "Květ akátu, muškát, kandované ovoce.",
    pairing: "Asijská kuchyně, lehce pikantní předkrmy, sýry s bílou plísní.",
    parametry: { cukr: "12 g/l", kyseliny: "6,1 g/l", alkohol: "12,5 % obj." },
    obrazek:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80",
    vyber: true,
  },
  {
    id: "cabernet-cuvee-2021",
    nazev: "Cabernet Moravia Cuvée",
    rocnik: 2021,
    odruda: "Cabernet Moravia",
    vinarsvi: "Mayer Mikulov",
    oblast: "Mikulovsko, Jižní Morava",
    cena: 360,
    popis:
      "Plnější červené s jemnou tříslovinou a šťavnatým ovocem. Část vína ležela v dubovém sudu pro zaoblení.",
    chut: "Tmavé třešně, ostružiny, jemná čokoláda v závěru.",
    vune: "Švestková povidla, koření, lehká kouřovost.",
    pairing: "Zvěřina, hovězí steak, pečené žampiony, tvrdé sýry.",
    parametry: { cukr: "3 g/l", kyseliny: "5,9 g/l", alkohol: "13 % obj." },
    obrazek:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  },
];

export const featuredWines = wines.filter((wine) => wine.vyber).slice(0, 3);

export const getWineById = (id: string) =>
  wines.find((wine) => wine.id === id);
