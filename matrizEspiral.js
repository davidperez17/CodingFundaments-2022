function matrizEspiral(n) {
  let inicio = 0;
  let limite = n - 1;
  let contador = 1;

  let matriz = new Array(n);

  for (i = 0; i < n; i++) {
    matriz[i] = new Array(n);
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      matriz[i][j] = 0;
    }
  }

  while (contador <= Math.pow(n, 2)) {
    for (i = inicio; i <= limite; i++) {
      matriz[inicio][i] = contador;
      contador++;
    }
    for (i = inicio + 1; i <= limite; i++) {
      matriz[i][limite] = contador;
      contador++;
    }
    for (i = limite - 1; i >= inicio; i--) {
      matriz[limite][i] = contador;
      contador++;
    }
    for (i = limite - 1; i >= inicio + 1; i--) {
      matriz[i][inicio] = contador;
      contador++;
    }
    inicio += 1;
    limite -= 1;
  }
  document.write("<table style='color:white;background-color:gray'");
  for (i = 0; i < n; i++) {
    document.write("<tr>");
    for (j = 0; j < n; j++) {
      document.write(
        "<td style='border:1px solid white;text-align:center;padding:10px'>" +
          matriz[i][j] +
          "</td>"
      );
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
