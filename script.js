



// nivel 

const nivel = document.getElementById('nivel');
const proficiencia = document.getElementById('proficiencia');

function atualizarProf() {
    const valor = parseInt(nivel.value) || 1;
    let resultado;

    if (valor >= 1 && valor <= 4) {
        resultado = 2;
    } else if (valor >= 5 && valor <= 8) {
        resultado = 3;
    } else if (valor >= 9 && valor <= 12) {
        resultado = 4;
    } else if (valor >= 13 && valor <= 16) {
        resultado = 5;
    } else if (valor >= 17 && valor <= 20) {
        resultado = 6;
    } else {
        resultado = 'Fora do intervalo';
    }

    proficiencia.textContent = resultado;
}

nivel.addEventListener('input', atualizarProf);


atualizarProf();






//atributos e modificadores



// Função para calcular o modificador
function calcularModificador(valor) {
    return Math.floor((valor - 10) / 2);
}

// Função para formatar o modificador (adiciona sinal de + para valores positivos)
function formatarModificador(mod) {
    return mod >= 0 ? `+${mod}` : mod;
}

// Configuração para força
const força_input = document.getElementById('força_in');
const mod_força = document.getElementById('modforça_out');

força_input.addEventListener('input', function () {
    const valor = parseInt(this.value);
    const modificador = calcularModificador(valor);
    mod_força.textContent = formatarModificador(modificador);
});

// Configuração para destreza
const dex_input = document.getElementById('dex_in');
const mod_dex = document.getElementById('moddex_out');

dex_input.addEventListener('input', function () {
    const valor = parseInt(this.value);
    const modificador = calcularModificador(valor);
    mod_dex.textContent = formatarModificador(modificador);
});

// Configuração para constituição
const cons_input = document.getElementById('cons_in');
const mod_cons = document.getElementById('modcons_out');

cons_input.addEventListener('input', function () {
    const valor = parseInt(this.value);
    const modificador = calcularModificador(valor);
    mod_cons.textContent = formatarModificador(modificador);
});

// Configuração para inteligência
const int_input = document.getElementById('int_in');
const mod_int = document.getElementById('modint_out');

int_input.addEventListener('input', function () {
    const valor = parseInt(this.value);
    const modificador = calcularModificador(valor);
    mod_int.textContent = formatarModificador(modificador);
});

// Configuração para sabedoria
const sab_input = document.getElementById('sab_in');
const mod_sab = document.getElementById('modsab_out');

sab_input.addEventListener('input', function () {
    const valor = parseInt(this.value);
    const modificador = calcularModificador(valor);
    mod_sab.textContent = formatarModificador(modificador);
});

// Configuração para carisma
const char_input = document.getElementById('char_in');
const mod_char = document.getElementById('modchar_out');

char_input.addEventListener('input', function () {
    const valor = parseInt(this.value);
    const modificador = calcularModificador(valor);
    mod_char.textContent = formatarModificador(modificador);
});




// pericias




const atletismo_pericia = document.getElementById('atletismo_pericia');
const atletismo_expertise = document.getElementById('atletismo_expertise');
const atletismo = document.getElementById('atletismo');
const atletismo_bonus = document.getElementById('atletismo_bonus');



function atletismo_func() {
    let valor = parseInt(mod_força.textContent) || 0;
    if (atletismo_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (atletismo_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(atletismo_bonus.value) || 0;
    atletismo.textContent = valor;
}

atletismo_pericia.addEventListener('change', atletismo_func);
atletismo_expertise.addEventListener('change', atletismo_func);
mod_força.addEventListener('input', atletismo_func);
força_input.addEventListener('input', atletismo_func);
nivel.addEventListener('input', atletismo_func);
atletismo_bonus.addEventListener('input', atletismo_func);










const acrobacia_pericia = document.getElementById('acrobacia_pericia');
const acrobacia_expertise = document.getElementById('acrobacia_expertise');
const acrobacia = document.getElementById('acrobacia');
const acrobacia_bonus = document.getElementById('acrobacia_bonus');

function acrobacia_func() {
    let valor = parseInt(mod_dex.textContent) || 0;
    if (acrobacia_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (acrobacia_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(acrobacia_bonus.value) || 0;

    acrobacia.textContent = valor;
}

acrobacia_pericia.addEventListener('change', acrobacia_func);
acrobacia_expertise.addEventListener('change', acrobacia_func);
mod_dex.addEventListener('input', acrobacia_func);
dex_input.addEventListener('input', acrobacia_func);
nivel.addEventListener('input', acrobacia_func);
acrobacia_bonus.addEventListener('input', acrobacia_func);











const prestidigitação_pericia = document.getElementById('prestidigitação_pericia');
const prestidigitação_expertise = document.getElementById('prestidigitação_expertise');
const prestidigitação = document.getElementById('prestidigitação');
const prestidigitação_bonus = document.getElementById('prestidigitação_bonus');


function prestidigitação_func() {
    let valor = parseInt(mod_dex.textContent) || 0;
    if (prestidigitação_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (prestidigitação_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(acrobacia_bonus.value) || 0;
    valor += parseInt(prestidigitação_bonus.value) || 0;

    prestidigitação.textContent = valor;
}

prestidigitação_pericia.addEventListener('change', prestidigitação_func);
prestidigitação_expertise.addEventListener('change', prestidigitação_func);
mod_dex.addEventListener('input', prestidigitação_func);
dex_input.addEventListener('input', prestidigitação_func);
nivel.addEventListener('input', prestidigitação_func);
prestidigitação_bonus.addEventListener('input', prestidigitação_func);












const furtividade_pericia = document.getElementById('furtividade_pericia');
const furtividade_expertise = document.getElementById('furtividade_expertise');
const furtividade = document.getElementById('furtividade');
const furtividade_bonus = document.getElementById('furtividade_bonus');



function furtividade_func() {
    let valor = parseInt(mod_dex.textContent) || 0;
    if (furtividade_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (furtividade_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(furtividade_bonus.value) || 0;

    furtividade.textContent = valor;
}

furtividade_pericia.addEventListener('change', furtividade_func);
furtividade_expertise.addEventListener('change', furtividade_func);
mod_dex.addEventListener('input', furtividade_func);
dex_input.addEventListener('input', furtividade_func);
nivel.addEventListener('input', furtividade_func);
furtividade_bonus.addEventListener('input', furtividade_func);








const enganação_pericia = document.getElementById('enganação_pericia');
const enganação_expertise = document.getElementById('enganação_expertise');
const enganação = document.getElementById('enganação');
const enganação_bonus = document.getElementById('enganação_bonus');



function enganação_func() {
    let valor = parseInt(mod_char.textContent) || 0;
    if (enganação_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (enganação_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(enganação_bonus.value) || 0;

    enganação.textContent = valor;
}

enganação_pericia.addEventListener('change', enganação_func);
enganação_expertise.addEventListener('change', enganação_func);
mod_char.addEventListener('input', enganação_func);
char_input.addEventListener('input', enganação_func);
nivel.addEventListener('input', enganação_func);
enganação_bonus.addEventListener('input', enganação_func);







const intimidação_pericia = document.getElementById('intimidação_pericia');
const intimidação_expertise = document.getElementById('intimidação_expertise');
const intimidação = document.getElementById('intimidação');
const intimidação_bonus = document.getElementById('intimidação_bonus');



function intimidação_func() {
    let valor = parseInt(mod_char.textContent) || 0;
    if (intimidação_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (intimidação_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(intimidação_bonus.value) || 0;

    intimidação.textContent = valor;
}

intimidação_pericia.addEventListener('change', intimidação_func);
intimidação_expertise.addEventListener('change', intimidação_func);
mod_char.addEventListener('input', intimidação_func);
char_input.addEventListener('input', intimidação_func);
nivel.addEventListener('input', intimidação_func);
intimidação_bonus.addEventListener('input', intimidação_func);






const performance_pericia = document.getElementById('performance_pericia');
const performance_expertise = document.getElementById('performance_expertise');
const performance = document.getElementById('performance');
const performance_bonus = document.getElementById('performance_bonus');



function performance_func() {
    let valor = parseInt(mod_char.textContent) || 0;
    if (performance_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (performance_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(performance_bonus.value) || 0;

    performance.textContent = valor;
}

performance_pericia.addEventListener('change', performance_func);
performance_expertise.addEventListener('change', performance_func);
mod_char.addEventListener('input', performance_func);
char_input.addEventListener('input', performance_func);
nivel.addEventListener('input', performance_func);
performance_bonus.addEventListener('input', performance_func);









const persuasão_pericia = document.getElementById('persuasão_pericia');
const persuasão_expertise = document.getElementById('persuasão_expertise');
const persuasão = document.getElementById('persuasão');
const persuasão_bonus = document.getElementById('persuasão_bonus');



function persuasão_func() {
    let valor = parseInt(mod_char.textContent) || 0;
    if (persuasão_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (persuasão_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(persuasão_bonus.value) || 0;

    persuasão.textContent = valor;
}

persuasão_pericia.addEventListener('change', persuasão_func);
persuasão_expertise.addEventListener('change', persuasão_func);
mod_char.addEventListener('input', persuasão_func);
char_input.addEventListener('input', persuasão_func);
nivel.addEventListener('input', persuasão_func);
persuasão_bonus.addEventListener('input', persuasão_func);




const cuidado_com_animais_pericia = document.getElementById('cuidado_com_animais_pericia');
const cuidado_com_animais_expertise = document.getElementById('cuidado_com_animais_expertise');
const cuidado_com_animais = document.getElementById('cuidado_com_animais');
const cuidado_com_animais_bonus = document.getElementById('cuidado_com_animais_bonus');



function cuidado_com_animais_func() {
    let valor = parseInt(mod_sab.textContent) || 0;
    if (cuidado_com_animais_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (cuidado_com_animais_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(cuidado_com_animais_bonus.value) || 0;

    cuidado_com_animais.textContent = valor;
}

cuidado_com_animais_pericia.addEventListener('change', cuidado_com_animais_func);
cuidado_com_animais_expertise.addEventListener('change', cuidado_com_animais_func);
mod_sab.addEventListener('input', cuidado_com_animais_func);
sab_input.addEventListener('input', cuidado_com_animais_func);
nivel.addEventListener('input', cuidado_com_animais_func);
cuidado_com_animais_bonus.addEventListener('input', cuidado_com_animais_func);







const intuição_pericia = document.getElementById('intuição_pericia');
const intuição_expertise = document.getElementById('intuição_expertise');
const intuição = document.getElementById('intuição');
const intuição_bonus = document.getElementById('intuição_bonus');



function intuição_func() {
    let valor = parseInt(mod_sab.textContent) || 0;
    if (intuição_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (intuição_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(intuição_bonus.value) || 0;


    intuição.textContent = valor;
}

intuição_pericia.addEventListener('change', intuição_func);
intuição_expertise.addEventListener('change', intuição_func);
mod_sab.addEventListener('input', intuição_func);
sab_input.addEventListener('input', intuição_func);
nivel.addEventListener('input', intuição_func);
intuição_bonus.addEventListener('input', intuição_func);










const medicina_pericia = document.getElementById('medicina_pericia');
const medicina_expertise = document.getElementById('medicina_expertise');
const medicina = document.getElementById('medicina');
const medicina_bonus = document.getElementById('medicina_bonus');



function medicina_func() {
    let valor = parseInt(mod_sab.textContent) || 0;
    if (medicina_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (medicina_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }

    valor += parseInt(medicina_bonus.value) || 0;


    medicina.textContent = valor;
}

medicina_pericia.addEventListener('change', medicina_func);
medicina_expertise.addEventListener('change', medicina_func);
mod_sab.addEventListener('input', medicina_func);
sab_input.addEventListener('input', medicina_func);
nivel.addEventListener('input', medicina_func);
medicina_bonus.addEventListener('input', medicina_func);









const percepção_pericia = document.getElementById('percepção_pericia');
const percepção_expertise = document.getElementById('percepção_expertise');
const percepção = document.getElementById('percepção');
const percepção_bonus = document.getElementById('percepção_bonus');



function percepção_func() {
    let valor = parseInt(mod_sab.textContent) || 0;
    if (percepção_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (percepção_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }

    valor += parseInt(percepção_bonus.value) || 0;

    percepção.textContent = valor;
}

percepção_pericia.addEventListener('change', percepção_func);
percepção_expertise.addEventListener('change', percepção_func);
mod_sab.addEventListener('input', percepção_func);
sab_input.addEventListener('input', percepção_func);
nivel.addEventListener('input', percepção_func);
percepção_bonus.addEventListener('input', percepção_func);







const sobrevivencia_pericia = document.getElementById('sobrevivencia_pericia');
const sobrevivencia_expertise = document.getElementById('sobrevivencia_expertise');
const sobrevivencia = document.getElementById('sobrevivencia');
const sobrevivencia_bonus = document.getElementById('sobrevivencia_bonus');



function sobrevivencia_func() {
    let valor = parseInt(mod_sab.textContent) || 0;
    if (sobrevivencia_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (sobrevivencia_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }

    valor += parseInt(sobrevivencia_bonus.value) || 0;

    sobrevivencia.textContent = valor;
}

sobrevivencia_pericia.addEventListener('change', sobrevivencia_func);
sobrevivencia_expertise.addEventListener('change', sobrevivencia_func);
mod_sab.addEventListener('input', sobrevivencia_func);
sab_input.addEventListener('input', sobrevivencia_func);
nivel.addEventListener('input', sobrevivencia_func);
sobrevivencia_bonus.addEventListener('input', sobrevivencia_func);











const arcana_pericia = document.getElementById('arcana_pericia');
const arcana_expertise = document.getElementById('arcana_expertise');
const arcana = document.getElementById('arcana');
const arcana_bonus = document.getElementById('arcana_bonus');



function arcana_func() {
    let valor = parseInt(mod_int.textContent) || 0;
    if (arcana_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (arcana_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(arcana_bonus.value) || 0;


    arcana.textContent = valor;
}

arcana_pericia.addEventListener('change', arcana_func);
arcana_expertise.addEventListener('change', arcana_func);
mod_int.addEventListener('input', arcana_func);
int_input.addEventListener('input', arcana_func);
nivel.addEventListener('input', arcana_func);
arcana_bonus.addEventListener('input', arcana_func);







const historia_pericia = document.getElementById('historia_pericia');
const historia_expertise = document.getElementById('historia_expertise');
const historia = document.getElementById('historia');
const historia_bonus = document.getElementById('historia_bonus');



function historia_func() {
    let valor = parseInt(mod_int.textContent) || 0;
    if (historia_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (historia_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(historia_bonus.value) || 0;

    historia.textContent = valor;
}

historia_pericia.addEventListener('change', historia_func);
historia_expertise.addEventListener('change', historia_func);
mod_int.addEventListener('input', historia_func);
int_input.addEventListener('input', historia_func);
nivel.addEventListener('input', historia_func);
historia_bonus.addEventListener('input', historia_func);











const investigação_pericia = document.getElementById('investigação_pericia');
const investigação_expertise = document.getElementById('investigação_expertise');
const investigação = document.getElementById('investigação');
const investigação_bonus = document.getElementById('investigação_bonus');



function investigação_func() {
    let valor = parseInt(mod_int.textContent) || 0;
    if (investigação_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (investigação_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(investigação_bonus.value) || 0;


    investigação.textContent = valor;
}

investigação_pericia.addEventListener('change', investigação_func);
investigação_expertise.addEventListener('change', investigação_func);
mod_int.addEventListener('input', investigação_func);
int_input.addEventListener('input', investigação_func);
nivel.addEventListener('input', investigação_func);
investigação_bonus.addEventListener('input', investigação_func);





const natureza_pericia = document.getElementById('natureza_pericia');
const natureza_expertise = document.getElementById('natureza_expertise');
const natureza = document.getElementById('natureza');
const natureza_bonus = document.getElementById('natureza_bonus');


function natureza_func() {
    let valor = parseInt(mod_int.textContent) || 0;
    if (natureza_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (natureza_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }

    valor += parseInt(natureza_bonus.value) || 0;

    natureza.textContent = valor;
}

natureza_pericia.addEventListener('change', natureza_func);
natureza_expertise.addEventListener('change', natureza_func);
mod_int.addEventListener('input', natureza_func);
int_input.addEventListener('input', natureza_func);
nivel.addEventListener('input', natureza_func);
natureza_bonus.addEventListener('input', natureza_func);






const religião_pericia = document.getElementById('religião_pericia');
const religião_expertise = document.getElementById('religião_expertise');
const religião = document.getElementById('religião');
const religião_bonus = document.getElementById('religião_bonus');



function religião_func() {
    let valor = parseInt(mod_int.textContent) || 0;
    if (religião_pericia.checked) {
        valor += parseInt(proficiencia.textContent);
        if (religião_expertise.checked) {
            valor += parseInt(proficiencia.textContent);
        }
    }
    valor += parseInt(religião_bonus.value) || 0;

    religião.textContent = valor;
}

religião_pericia.addEventListener('change', religião_func);
religião_expertise.addEventListener('change', religião_func);
mod_int.addEventListener('input', religião_func);
int_input.addEventListener('input', religião_func);
nivel.addEventListener('input', religião_func);
religião_bonus.addEventListener('input', religião_func);




//saves




const força_saving = document.getElementById('força_saving');
const força_saving_check = document.getElementById('força_saving_check');
const força_save_bonus = document.getElementById('força_save_bonus');


function força_saving_func() {
    let valor = parseInt(mod_força.textContent) || 0;
    if (força_saving_check.checked) {
        valor += parseInt(proficiencia.textContent);

    }
    valor += parseInt(força_save_bonus.value) || 0;
    força_saving.textContent = valor;
}

força_saving_check.addEventListener('change', força_saving_func);
mod_força.addEventListener('input', força_saving_func);
força_input.addEventListener('input', força_saving_func);
nivel.addEventListener('input', força_saving_func);
força_save_bonus.addEventListener('input', força_saving_func);






const cons_saving = document.getElementById('cons_saving');
const cons_saving_check = document.getElementById('cons_saving_check');
const cons_save_bonus = document.getElementById('cons_save_bonus');

function cons_saving_func() {
    let valor = parseInt(mod_cons.textContent) || 0;
    if (cons_saving_check.checked) {
        valor += parseInt(proficiencia.textContent);

    }
    valor += parseInt(cons_save_bonus.value) || 0;
    cons_saving.textContent = valor;
}

cons_saving_check.addEventListener('change', cons_saving_func);
mod_cons.addEventListener('input', cons_saving_func);
cons_input.addEventListener('input', cons_saving_func);
nivel.addEventListener('input', cons_saving_func);
cons_save_bonus.addEventListener('input', cons_saving_func);









const dex_saving = document.getElementById('dex_saving');
const dex_saving_check = document.getElementById('dex_saving_check');
const dex_save_bonus = document.getElementById('dex_save_bonus');

function dex_saving_func() {
    let valor = parseInt(mod_dex.textContent) || 0;
    if (dex_saving_check.checked) {
        valor += parseInt(proficiencia.textContent);

    }
    valor += parseInt(dex_save_bonus.value) || 0;
    dex_saving.textContent = valor;
}

dex_saving_check.addEventListener('change', dex_saving_func);
mod_dex.addEventListener('input', dex_saving_func);
dex_input.addEventListener('input', dex_saving_func);
nivel.addEventListener('input', dex_saving_func);
dex_save_bonus.addEventListener('input', dex_saving_func);







const int_saving = document.getElementById('int_saving');
const int_saving_check = document.getElementById('int_saving_check');
const int_save_bonus = document.getElementById('int_save_bonus');

function int_saving_func() {
    let valor = parseInt(mod_int.textContent) || 0;
    if (int_saving_check.checked) {
        valor += parseInt(proficiencia.textContent);

    }
    valor += parseInt(int_save_bonus.value) || 0;
    int_saving.textContent = valor;
}

int_saving_check.addEventListener('change', int_saving_func);
mod_int.addEventListener('input', int_saving_func);
int_input.addEventListener('input', int_saving_func);
nivel.addEventListener('input', int_saving_func);
int_save_bonus.addEventListener('input', int_saving_func);


const sab_saving = document.getElementById('sab_saving');
const sab_saving_check = document.getElementById('sab_saving_check');
const sab_save_bonus = document.getElementById('sab_save_bonus');

function sab_saving_func() {
    let valor = parseInt(mod_sab.textContent) || 0;
    if (sab_saving_check.checked) {
        valor += parseInt(proficiencia.textContent);

    }
    valor += parseInt(sab_save_bonus.value) || 0;
    sab_saving.textContent = valor;
}

sab_saving_check.addEventListener('change', sab_saving_func);
mod_sab.addEventListener('input', sab_saving_func);
sab_input.addEventListener('input', sab_saving_func);
nivel.addEventListener('input', sab_saving_func);
sab_save_bonus.addEventListener('input', sab_saving_func);








const char_saving = document.getElementById('char_saving');
const char_saving_check = document.getElementById('char_saving_check');
const char_save_bonus = document.getElementById('char_save_bonus');


function char_saving_func() {
    let valor = parseInt(mod_char.textContent) || 0;
    if (char_saving_check.checked) {
        valor += parseInt(proficiencia.textContent);

    }
    valor += parseInt(char_save_bonus.value) || 0;

    char_saving.textContent = valor;
}

char_saving_check.addEventListener('change', char_saving_func);
mod_char.addEventListener('input', char_saving_func);
char_input.addEventListener('input', char_saving_func);
nivel.addEventListener('input', char_saving_func);
char_save_bonus.addEventListener('input', char_saving_func);






//life


const life_atual = document.getElementById('life_atual');
const life_cura = document.getElementById('life_cura');
const life_dano = document.getElementById('life_dano');
const life_input = document.getElementById('life_input');
const life_max = document.getElementById('life_max');
const life_override = document.getElementById('life_override');




life_cura.addEventListener("click", cura_func);
life_dano.addEventListener("click", dano_func);
life_override.addEventListener("click", override_func);

function override_func() {
    let valor = parseInt(life_input.value) || 0;
    life_max.textContent = valor;
}
function cura_func() {
    let valor = parseInt(life_input.value) || 0;
    life_atual.textContent = (parseInt(life_atual.textContent) || 0) + valor;
}
function dano_func() {
    let valor = parseInt(life_input.value) || 0;
    life_atual.textContent = (parseInt(life_atual.textContent) || 0) - valor;
}


// passivas

const investigação_passiva = document.getElementById('investigação_passiva');
const investigação_passiva_bonus = document.getElementById('investigação_passiva_bonus');


function investigação_passiva_func() {
    let valor = parseInt(investigação.textContent) || 0;
    valor += 10
    valor += parseInt(investigação_passiva_bonus.value) || 0;
    investigação_passiva.textContent = valor;

}



investigação_pericia.addEventListener('change', investigação_passiva_func);
investigação_expertise.addEventListener('change', investigação_passiva_func);
mod_int.addEventListener('input', investigação_passiva_func);
int_input.addEventListener('input', investigação_passiva_func);
nivel.addEventListener('input', investigação_passiva_func);
investigação_bonus.addEventListener('input', investigação_passiva_func);
investigação_passiva_bonus.addEventListener('input', investigação_passiva_func);







const percepção_passiva = document.getElementById('percepção_passiva');
const percepção_passiva_bonus = document.getElementById('percepção_passiva_bonus');


function percepção_passiva_func() {
    let valor = (parseInt(percepção.textContent) || 0);
    valor += 10
    valor += parseInt(percepção_passiva_bonus.value) || 0;

    percepção_passiva.textContent = valor;

}


percepção_pericia.addEventListener('change', percepção_passiva_func);
percepção_expertise.addEventListener('change', percepção_passiva_func);
mod_sab.addEventListener('input', percepção_passiva_func);
sab_input.addEventListener('input', percepção_passiva_func);
nivel.addEventListener('input', percepção_passiva_func);
percepção_bonus.addEventListener('input', percepção_passiva_func);
percepção_passiva_bonus.addEventListener('input', percepção_passiva_func);






const intuição_passiva = document.getElementById('intuição_passiva');
const intuição_passiva_bonus = document.getElementById('intuição_passiva_bonus');


function intuição_passiva_func() {
    let valor = (parseInt(intuição.textContent) || 0);
    valor += 10
    valor += parseInt(intuição_passiva_bonus.value) || 0;

    intuição_passiva.textContent = valor;

}


intuição_pericia.addEventListener('change', intuição_passiva_func);
intuição_expertise.addEventListener('change', intuição_passiva_func);
mod_sab.addEventListener('input', intuição_passiva_func);
sab_input.addEventListener('input', intuição_passiva_func);
nivel.addEventListener('input', intuição_passiva_func);
intuição_bonus.addEventListener('input', intuição_passiva_func);
intuição_passiva_bonus.addEventListener('input', intuição_passiva_func);








const armadura_out = document.getElementById('armadura_out');
const dc_base = document.getElementById('dc_base');
const opcoes_armadura = document.getElementById('opçoes_armadura');
const escudo = document.getElementById('escudo');
const armadura_bonus = document.getElementById('armadura_bonus');



function ajustarDex(dex) {
    if (dex > 2) return 2;
    if (dex < -2) return -2;
    return dex;
}



function armor_func() {


    let dex = parseInt(mod_dex.textContent) || 0;
    let armadura = parseInt(dc_base.textContent) || 0


    if (dc_base.value === '' || dc_base.value === '0') {
        armadura = 8;
    }

    let tipoArmadura = opcoes_armadura.value;

    if (tipoArmadura === 'leve') {
        armadura += dex;
    } else if (tipoArmadura === 'media') {
        armadura += ajustarDex(dex);
    }

    if (escudo.checked) {
        armadura += 2;
    }


    armadura += parseInt(armadura_bonus.value) || 0;
    armadura += parseInt(dc_base.value) || 0;



    armadura_out.textContent = armadura;

}




dc_base.addEventListener('input', armor_func);

opcoes_armadura.addEventListener('change', armor_func);
escudo.addEventListener('change', armor_func);
armadura_bonus.addEventListener('input', armor_func);
mod_dex.addEventListener('input', armor_func);
dex_input.addEventListener('input', armor_func);







console.log(dex_input); // Deve retornar o elemento, não null
if (!dex_input) {
    console.error("Elemento dex_input não encontrado!");
}


