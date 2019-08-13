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

const subsidio_mensiual = [
  {
    2019: [
      { lim_inf: 0.01, lim_sup: 1768.96, subsidio: 407.02 },
      { lim_inf: 1768.97, lim_sup: 2653.38, subsidio: 406.83 },
      { lim_inf: 2653.39, lim_sup: 3472.84, subsidio: 406.62 },
      { lim_inf: 3472.85, lim_sup: 3537.87, subsidio: 392.77 },
      { lim_inf: 3537.88, lim_sup: 4446.15, subsidio: 382.46 },
      { lim_inf: 4446.16, lim_sup: 4717.18, subsidio: 354.23 },
      { lim_inf: 4717.19, lim_sup: 5335.42, subsidio: 324.87 },
      { lim_inf: 5335.43, lim_sup: 6224.67, subsidio: 294.63 },
      { lim_inf: 6224.68, lim_sup: 7113.9, subsidio: 253.54 },
      { lim_inf: 7113.91, lim_sup: 7382.33, subsidio: 217.61 },
      { lim_inf: 7382.34, lim_sup: null, subsidio: 0.0 }
    ],
    2018: [
      { lim_inf: 0.01, lim_sup: 1768.96, subsidio: 407.02 },
      { lim_inf: 1768.97, lim_sup: 2653.38, subsidio: 406.83 },
      { lim_inf: 2653.39, lim_sup: 3472.84, subsidio: 406.62 },
      { lim_inf: 3472.85, lim_sup: 3537.87, subsidio: 392.77 },
      { lim_inf: 3537.88, lim_sup: 4446.15, subsidio: 382.46 },
      { lim_inf: 4446.16, lim_sup: 4717.18, subsidio: 354.23 },
      { lim_inf: 4717.19, lim_sup: 5335.42, subsidio: 324.87 },
      { lim_inf: 5335.43, lim_sup: 6224.67, subsidio: 294.63 },
      { lim_inf: 6224.68, lim_sup: 7113.9, subsidio: 253.54 },
      { lim_inf: 7113.91, lim_sup: 7382.33, subsidio: 217.61 },
      { lim_inf: 7382.34, lim_sup: null, subsidio: 0.0 }
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
