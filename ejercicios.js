
/** Merge Sorted Arrays*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i,j,k //variables para recorrer los array


    //iterador i es = a el valor de m -1, al igual que iterador j es = a el valor de n-1
    //el valor de k es = a la suma de los dos enteros dados -1, con ello aeguramos que
    //se haga recorrido de todos los elementos
    //la iteración se da siempre y cuando  los iteradores i y j sean mayores o iguales a 0
    //la iteración irá en orden decreciente
    for(i = m-1, j = n-1, k = m + n - 1; i >= 0 && j >= 0; k--){

        //si n número del array1 es >= que n numero en la misma posición pero en el array 2
        //entonces ese valor irá a el array 1 que se irá sobreescribiendo
        if(nums1[i] >= nums2[j]){
            nums1[k] = nums1[i--];

            //de lo contrario el array 1 tomará el valor del array 2
        }else{
            nums1[k] = nums2[j--];
        }
        console.log(nums1)
    }

//ciclos que irán mermando el valor de los iteradores siempre y cuando su valor sea >= a 0
    while(i >= 0){
        nums1[k--] = nums1[i--];
    }

    while(j >= 0){
        nums1[k--] = nums2[j--]
    }
};

/** Generate Parentheses*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    // Resultant list
    const resultado = [];
    // Generar paréntesis recursivamente
    generador(resultado, "", 0, 0, n);
    return resultado;
};

function generador(resultado, s, abrir, cerrar, n) {
    // Condición inicial
    if (abrir === n && cerrar === n) {
        resultado.push(s);
        return;
    }

    //si el número de paréntesis de apertura es menor que al n dado
    if (abrir < n) {
        generador(resultado, s + "(", abrir + 1, cerrar, n);
    }

    //Si es necesario que se adicionen paréntesis de cierre para igualar
    if (cerrar < abrir) {
        generador(resultado, s + ")", abrir, cerrar + 1, n);
    }
};

/** Letter Combinations of a Phone Number*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    //Diccionario con la asignación de valores para cada número
    const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
        '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

    // variable tamaño será = al tamaño de los dígitos dados, creamos un array para guardar respuesta
    let tamano = digits.length, respuesta = []

    //Si el tamaño difiere entonces retornamos un array vacío
    if (!tamano) return []

    //creamos una función que recibe dos parámetros, posición y string
    const abc = (pos, str) => {

        //si la posición es = al tamaño  entonces se agrega al array el string correspondiente a la posición
        if (pos === tamano) respuesta.push(str)
        else {
            //la variable letra toma el valor del dígito dado y de el string asociado a este
            let letra = L[digits[pos]]

            //iteración que irá enviando parámetros a la función
            for (let i = 0; i < letra.length; i++)
                abc(pos+1,str+letra[i])
        }
    }
    abc(0,"")
    return respuesta
};