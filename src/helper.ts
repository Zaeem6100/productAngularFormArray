 export function noInput(eleName :string) {
  let eme : HTMLElement = document.getElementById(eleName) as HTMLElement;
  eme.setAttribute("style", "border: solid 1px red");
  return "";
}

export  function noStyle(eleName :string){
  let eme : HTMLElement = document.getElementById(eleName) as HTMLElement;
  eme.setAttribute("style", "border: solid 1px green");
  return "";
}
