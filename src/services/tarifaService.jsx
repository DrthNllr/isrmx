const tarifas_mensual = [
  {
    2019: [
      { lim_inf: 0.01, lim_sup: 578.52, cuota: 0, pct: 1.92 },
      { lim_inf: 578.53, lim_sup: 4910.18, cuota: 11.11, pct: 6.4 },
      { lim_inf: 4910.19, lim_sup: 8629.2, cuota: 288.33, pct: 10.88 },
      { lim_inf: 8629.21, lim_sup: 10031.07, cuota: 692.96, pct: 16 },
      { lim_inf: 10031.08, lim_sup: 12009.94, cuota: 917.26, pct: 17.92 },
      { lim_inf: 12009.95, lim_sup: 24222.31, cuota: 1271.87, pct: 21.36 },
      { lim_inf: 24222.32, lim_sup: 38177.69, cuota: 3880.44, pct: 23.52 },
      { lim_inf: 38177.7, lim_sup: 72887.5, cuota: 7162.74, pct: 30 },
      { lim_inf: 72887.51, lim_sup: 97183.33, cuota: 17575.69, pct: 32 },
      { lim_inf: 97183.34, lim_sup: 291550, cuota: 25350.35, pct: 34 },
      { lim_inf: 291550.01, lim_sup: null, cuota: 91435.02, pct: 35 }
    ]
  },
  {
    2018: [
      { lim_inf: 0.01, lim_sup: 578.52, cuota: 0, pct: 1.92 },
      { lim_inf: 578.53, lim_sup: 4910.18, cuota: 11.11, pct: 6.4 },
      { lim_inf: 4910.19, lim_sup: 8629.2, cuota: 288.33, pct: 10.88 },
      { lim_inf: 8629.21, lim_sup: 10031.07, cuota: 692.96, pct: 16 },
      { lim_inf: 10031.08, lim_sup: 12009.94, cuota: 917.26, pct: 17.92 },
      { lim_inf: 12009.95, lim_sup: 24222.31, cuota: 1271.87, pct: 21.36 },
      { lim_inf: 24222.32, lim_sup: 38177.69, cuota: 3880.44, pct: 23.52 },
      { lim_inf: 38177.7, lim_sup: 72887.5, cuota: 7162.74, pct: 30 },
      { lim_inf: 72887.51, lim_sup: 97183.33, cuota: 17575.69, pct: 32 },
      { lim_inf: 97183.34, lim_sup: 291550, cuota: 25350.35, pct: 34 },
      { lim_inf: 291550.01, lim_sup: null, cuota: 91435.02, pct: 35 }
    ]
  }
];

export function getTarifas(tipoPeriodo, anio) {
  const tarifas = [];
  switch (tipoPeriodo) {
    case "mensual":
      tarifas = tarifas_mensual[anio];
      break;
    default:
      tarifas = [];
      break;
  }
  return tarifas;
}
