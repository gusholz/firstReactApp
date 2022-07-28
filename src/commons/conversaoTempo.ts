export function converterTempo(array: string){
    const [horas = "0", minutos = "0", segundos = "0"] = array.split(":");
  
    const horasParaSegundos = Number(horas)* 3600;
    const minutosParaSegundos = Number(minutos) * 60;
    //segundos
    return Math.floor((horasParaSegundos + minutosParaSegundos + Number(segundos)))
  }