const tarifas = [
  { periodo: 'mensual', anio: 2019, lim_inf: 0.01, lim_sup: 578.52, cuota: 0, pct: 1.92 },
  { periodo: 'mensual', anio: 2019, lim_inf: 578.53, lim_sup: 4910.18, cuota: 11.11, pct: 6.4 },
  { periodo: 'mensual', anio: 2019, lim_inf: 4910.19, lim_sup: 8629.2, cuota: 288.33, pct: 10.88 },
  { periodo: 'mensual', anio: 2019, lim_inf: 8629.21, lim_sup: 10031.07, cuota: 692.96, pct: 16 },
  { periodo: 'mensual', anio: 2019, lim_inf: 10031.08, lim_sup: 12009.94, cuota: 917.26, pct: 17.92 },
  { periodo: 'mensual', anio: 2019, lim_inf: 12009.95, lim_sup: 24222.31, cuota: 1271.87, pct: 21.36 },
  { periodo: 'mensual', anio: 2019, lim_inf: 24222.32, lim_sup: 38177.69, cuota: 3880.44, pct: 23.52 },
  { periodo: 'mensual', anio: 2019, lim_inf: 38177.7, lim_sup: 72887.5, cuota: 7162.74, pct: 30 },
  { periodo: 'mensual', anio: 2019, lim_inf: 72887.51, lim_sup: 97183.33, cuota: 17575.69, pct: 32 },
  { periodo: 'mensual', anio: 2019, lim_inf: 97183.34, lim_sup: 291550, cuota: 25350.35, pct: 34 },
  { periodo: 'mensual', anio: 2019, lim_inf: 291550.01, lim_sup: null, cuota: 91435.02, pct: 35 },
  { periodo: 'mensual', anio: 2018, lim_inf: 0.01, lim_sup: 578.52, cuota: 0, pct: 1.92 },
  { periodo: 'mensual', anio: 2018, lim_inf: 578.53, lim_sup: 4910.18, cuota: 11.11, pct: 6.4 },
  { periodo: 'mensual', anio: 2018, lim_inf: 4910.19, lim_sup: 8629.2, cuota: 288.33, pct: 10.88 },
  { periodo: 'mensual', anio: 2018, lim_inf: 8629.21, lim_sup: 10031.07, cuota: 692.96, pct: 16 },
  { periodo: 'mensual', anio: 2018, lim_inf: 10031.08, lim_sup: 12009.94, cuota: 917.26, pct: 17.92 },
  { periodo: 'mensual', anio: 2018, lim_inf: 12009.95, lim_sup: 24222.31, cuota: 1271.87, pct: 21.36 },
  { periodo: 'mensual', anio: 2018, lim_inf: 24222.32, lim_sup: 38177.69, cuota: 3880.44, pct: 23.52 },
  { periodo: 'mensual', anio: 2018, lim_inf: 38177.7, lim_sup: 72887.5, cuota: 7162.74, pct: 30 },
  { periodo: 'mensual', anio: 2018, lim_inf: 72887.51, lim_sup: 97183.33, cuota: 17575.69, pct: 32 },
  { periodo: 'mensual', anio: 2018, lim_inf: 97183.34, lim_sup: 291550, cuota: 25350.35, pct: 34 },
  { periodo: 'mensual', anio: 2018, lim_inf: 291550.01, lim_sup: null, cuota: 91435.02, pct: 35 },
  { periodo: 'mensual', anio: 2017, lim_inf: 0.01, lim_sup: 496.07, cuota: 0, pct: 1.92 },
  { periodo: 'mensual', anio: 2017, lim_inf: 496.08, lim_sup: 4210.41, cuota: 9.52, pct: 6.4 },
  { periodo: 'mensual', anio: 2017, lim_inf: 4210.42, lim_sup: 7399.42, cuota: 247.24, pct: 10.88 },
  { periodo: 'mensual', anio: 2017, lim_inf: 7399.43, lim_sup: 8601.5, cuota: 594.21, pct: 16 },
  { periodo: 'mensual', anio: 2017, lim_inf: 8601.51, lim_sup: 10298.35, cuota: 786.54, pct: 17.92 },
  { periodo: 'mensual', anio: 2017, lim_inf: 10298.36, lim_sup: 20770.29, cuota: 1090.61, pct: 21.36 },
  { periodo: 'mensual', anio: 2017, lim_inf: 20770.3, lim_sup: 32736.83, cuota: 3327.42, pct: 23.52 },
  { periodo: 'mensual', anio: 2017, lim_inf: 32736.84, lim_sup: 62500, cuota: 6141.95, pct: 30 },
  { periodo: 'mensual', anio: 2017, lim_inf: 62500.01, lim_sup: 83333.33, cuota: 15070.9, pct: 32 },
  { periodo: 'mensual', anio: 2017, lim_inf: 83333.34, lim_sup: 250000, cuota: 2173757, pct: 34 },
  { periodo: 'mensual', anio: 2017, lim_inf: 250000.01, lim_sup: null, cuota: 7840423, pct: 35 }
];

const subsidios = [
  { periodo: 'mensual', anio: 2019, lim_inf: 0.01, lim_sup: 1768.96, subsidio: 407.02 },
  { periodo: 'mensual', anio: 2019, lim_inf: 1768.97, lim_sup: 2653.38, subsidio: 406.83 },
  { periodo: 'mensual', anio: 2019, lim_inf: 2653.39, lim_sup: 3472.84, subsidio: 406.62 },
  { periodo: 'mensual', anio: 2019, lim_inf: 3472.85, lim_sup: 3537.87, subsidio: 392.77 },
  { periodo: 'mensual', anio: 2019, lim_inf: 3537.88, lim_sup: 4446.15, subsidio: 382.46 },
  { periodo: 'mensual', anio: 2019, lim_inf: 4446.16, lim_sup: 4717.18, subsidio: 354.23 },
  { periodo: 'mensual', anio: 2019, lim_inf: 4717.19, lim_sup: 5335.42, subsidio: 324.87 },
  { periodo: 'mensual', anio: 2019, lim_inf: 5335.43, lim_sup: 6224.67, subsidio: 294.63 },
  { periodo: 'mensual', anio: 2019, lim_inf: 6224.68, lim_sup: 7113.9, subsidio: 253.54 },
  { periodo: 'mensual', anio: 2019, lim_inf: 7113.91, lim_sup: 7382.33, subsidio: 217.61 },
  { periodo: 'mensual', anio: 2019, lim_inf: 7382.34, lim_sup: null, subsidio: 0.0 },
  { periodo: 'mensual', anio: 2018, lim_inf: 0.01, lim_sup: 1768.96, subsidio: 407.02 },
  { periodo: 'mensual', anio: 2018, lim_inf: 1768.97, lim_sup: 2653.38, subsidio: 406.83 },
  { periodo: 'mensual', anio: 2018, lim_inf: 2653.39, lim_sup: 3472.84, subsidio: 406.62 },
  { periodo: 'mensual', anio: 2018, lim_inf: 3472.85, lim_sup: 3537.87, subsidio: 392.77 },
  { periodo: 'mensual', anio: 2018, lim_inf: 3537.88, lim_sup: 4446.15, subsidio: 382.46 },
  { periodo: 'mensual', anio: 2018, lim_inf: 4446.16, lim_sup: 4717.18, subsidio: 354.23 },
  { periodo: 'mensual', anio: 2018, lim_inf: 4717.19, lim_sup: 5335.42, subsidio: 324.87 },
  { periodo: 'mensual', anio: 2018, lim_inf: 5335.43, lim_sup: 6224.67, subsidio: 294.63 },
  { periodo: 'mensual', anio: 2018, lim_inf: 6224.68, lim_sup: 7113.9, subsidio: 253.54 },
  { periodo: 'mensual', anio: 2018, lim_inf: 7113.91, lim_sup: 7382.33, subsidio: 217.61 },
  { periodo: 'mensual', anio: 2018, lim_inf: 7382.34, lim_sup: null, subsidio: 0.0 },
  { periodo: 'mensual', anio: 2017, lim_inf: 0.01, lim_sup: 1768.96, subsidio: 407.02 },
  { periodo: 'mensual', anio: 2017, lim_inf: 1768.97, lim_sup: 2653.38, subsidio: 406.83 },
  { periodo: 'mensual', anio: 2017, lim_inf: 2653.39, lim_sup: 3472.84, subsidio: 406.62 },
  { periodo: 'mensual', anio: 2017, lim_inf: 3472.85, lim_sup: 3537.87, subsidio: 392.77 },
  { periodo: 'mensual', anio: 2017, lim_inf: 3537.88, lim_sup: 4446.15, subsidio: 382.46 },
  { periodo: 'mensual', anio: 2017, lim_inf: 4446.16, lim_sup: 4717.18, subsidio: 354.23 },
  { periodo: 'mensual', anio: 2017, lim_inf: 4717.19, lim_sup: 5335.42, subsidio: 324.87 },
  { periodo: 'mensual', anio: 2017, lim_inf: 5335.43, lim_sup: 6224.67, subsidio: 294.63 },
  { periodo: 'mensual', anio: 2017, lim_inf: 6224.68, lim_sup: 7113.9, subsidio: 253.54 },
  { periodo: 'mensual', anio: 2017, lim_inf: 7113.91, lim_sup: 7382.33, subsidio: 217.61 },
  { periodo: 'mensual', anio: 2017, lim_inf: 7382.34, lim_sup: null, subsidio: 0 }
];

export function getTarifas(tipoPeriodo, anio, importe) {
  let tarifas = [];
  switch (tipoPeriodo) {
    case "mensual":
      tarifas_mensual[anio].each(function(i, v) {
        if (i.lim_inf >= importe && (i.lim_sup <= importe || i.lim_sup == null))
          tarifas = i;
      });
      break;
    default:
      tarifas = [];
      break;
  }
  return tarifas;
}
export function getSubsidio(tipoPeriodo, anio, importe) {
  let subsidio = [];
  switch (tipoPeriodo) {
    case "mensual":
      subsidio_mensual[anio].each(function(i, v) {
        if (i.lim_inf <= importe && (i.lim_sup >= importe || i.lim_sup == null))
          subsidio = i;
      });
      break;
    default:
      subsidio = [];
      break;
  }
  return subsidio;
}

export function regresaMensaje(mensaje){
  return [
    {_id: 0,
    descripcion: "Error",
    valor: mensaje,
    icono: "arrow-circle-o-right",
    tipo: "X"}
  ];
}

export function calculaISR(tipoPeriodo, anio, importe) {
  //console.log("Tarifas: ", tarifas_mensual);
  const importes = tarifas.filter(
    tarifa => tarifa.periodo = tipoPeriodo
        && tarifa.anio == anio
        && tarifa.lim_inf <= importe 
        && (tarifa.lim_sup == null || tarifa.lim_sup >= importe)
      )[0];
  const subsidio = subsidios.filter(
    subsidio => subsidio.periodo = tipoPeriodo
    && subsidio.anio == anio
    && subsidio.lim_inf <= importe
    && (subsidio.lim_sup == null || subsidio.lim_sup >= importe)
  )[0];
  console.log("Importes: ", importes);
  return [
    {
      _id: 0,
      descripcion: "Ingreso " + tipoPeriodo,
      valor: importe,
      icono: "arrow-circle-o-right",
      tipo: "$"
    },
    {
      _id: 1,
      descripcion: "Lim. Inf",
      valor: importes.lim_inf,
      icono: "minus",
      tipo: "$"
    },
    {
      _id: 2,
      descripcion: "Base",
      valor: importe - importes.lim_inf,
      icono: "arrow-circle-o-right",
      tipo: "$"
    },
    {
      _id: 3,
      descripcion: "Tasa",
      valor: importes.pct,
      icono: "times",
      tipo: "%"
    },
    {
      _id: 4,
      descripcion: "Resultado",
      valor: (importe-importes.lim_inf) * importes.pct / 100,
      icono: "arrow-circle-o-right",
      tipo: "$"
    },
    {
      _id: 5,
      descripcion: "Cuota fija",
      valor: importes.cuota,
      icono: "plus",
      tipo: "$"
    },
    {
      _id: 6,
      descripcion: "ISR",
      valor: ((importe-importes.lim_inf) * importes.pct / 100) +
        importes.cuota,
      icono: "exclamation-circle",
      tipo: "$"
    },
    {
      _id: 7,
      descripcion: "Subsidio",
      valor: subsidio.subsidio,
      icono: "minus",
      tipo: "$"
    },
    {
      _id: 99,
      descripcion: "ISR o Subsidio",
      valor: ((importe-importes.lim_inf) * importes.pct / 100) +
        importes.cuota - subsidio.subsidio,
      icono: "exclamation-circle",
      tipo: "$"
    }
  ];
}
