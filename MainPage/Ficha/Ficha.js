function f1(){
				var racas =document.getElementById('raca').value;
                if(racas=="Anão"){
                    document.getElementById('CON').value=14
                    document.getElementById('SAB').value=12
                    document.getElementById('DES').value=8
                    document.getElementById('FOR').value=10
                    document.getElementById('INT').value=10
                    document.getElementById('CAR').value=10
                    document.getElementById('deslocamento').value=" 6 Metros"
                    document.getElementById('altura').value="Médio"                    
                    return;
                }
                if(racas=="Elfo"){
                    document.getElementById('DES').value=14
                    document.getElementById('INT').value=12
                    document.getElementById('CON').value=8
                    document.getElementById('FOR').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('CAR').value=10
                    document.getElementById('deslocamento').value=" 9 Metros"
                    document.getElementById('altura').value="Médio"
                    return;
                }
                if(racas=="Goblin"){
                    document.getElementById('DES').value=14
                    document.getElementById('CAR').value=8
                    document.getElementById('CON').value=12
                    document.getElementById('FOR').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('INT').value=10
                    document.getElementById('deslocamento').value=" 6 Metros"
                    document.getElementById('altura').value="Pequeno"
                    return;
                }
                if(racas=="Halfling"){
                    document.getElementById('DES').value=14
                    document.getElementById('CAR').value=12
                    document.getElementById('FOR').value=8
                    document.getElementById('CON').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('INT').value=10
                    document.getElementById('deslocamento').value=" 6 Metros"
                    document.getElementById('altura').value="Pequeno"
                    return;
                }
                if(racas=="Humano"){
                    document.getElementById('CON').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('DES').value=10
                    document.getElementById('FOR').value=10
                    document.getElementById('INT').value=10
                    document.getElementById('CAR').value=10
                    document.getElementById('deslocamento').value=" 9 Metros"
                    document.getElementById('altura').value="Médio"
                    return;
                }
                if(racas=="Lefou"){
                    document.getElementById('CON').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('DES').value=10
                    document.getElementById('FOR').value=10
                    document.getElementById('INT').value=10
                    document.getElementById('CAR').value=10
                    document.getElementById('deslocamento').value=" 9 Metros"
                    document.getElementById('altura').value="Médio"
                    return;
                }
                if(racas=="Minotauro"){
                    document.getElementById('FOR').value=14
                    document.getElementById('CON').value=12
                    document.getElementById('CAR').value=8
                    document.getElementById('INT').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('DES').value=10
                    document.getElementById('deslocamento').value=" 9 Metros"
                    document.getElementById('altura').value="Médio"
                    return;
                }
                if(racas=="Qareen"){
                    document.getElementById('CAR').value=14
                    document.getElementById('INT').value=12
                    document.getElementById('SAB').value=8
                    document.getElementById('CON').value=10
                    document.getElementById('FOR').value=10
                    document.getElementById('DES').value=10
                    document.getElementById('deslocamento').value=" 9 Metros"
                    document.getElementById('altura').value="Médio"
                    return;
                }
                if(racas=="Gnomo"){
                    document.getElementById('INT').value=14
                    document.getElementById('CON').value=12
                    document.getElementById('FOR').value=8
                    document.getElementById('CAR').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('DES').value=10
                    document.getElementById('deslocamento').value=" 6 Metros"
                    document.getElementById('altura').value="Pequeno"
                    return;
                }
                if(racas=="Meio-Elfo"){
                    document.getElementById('DES').value=12
                    document.getElementById('CON').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('INT').value=10
                    document.getElementById('FOR').value=10
                    document.getElementById('CAR').value=10
                    document.getElementById('deslocamento').value=" 9 Metros"
                    document.getElementById('altura').value="Médio"
                    return;
                }
                if(racas=="Meio-Orc"){
                    document.getElementById('FOR').value=12
                    document.getElementById('CON').value=10
                    document.getElementById('SAB').value=10
                    document.getElementById('DES').value=10
                    document.getElementById('INT').value=10
                    document.getElementById('CAR').value=10
                    document.getElementById('deslocamento').value=" 9 Metros"
                    document.getElementById('altura').value="Médio"
                    return;
                }
            }
function f2(){
    var classe=document.getElementById('classe').value;
    var CON=document.getElementById('MCON').value;
    var lv=document.getElementById('nivel').value;
    if (classe=="Bárbaro"){
        var cv=parseInt(24+CON)+((CON+6)*(lv-1));
       	document.getElementById('pvt').value=cv       
    }
    if (classe=="Bardo"){
    	var cv=parseInt(12+CON)+((CON+3)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Clérigo"){
    	var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Druida"){
    	var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Feiticeiro"){
    	var cv=parseInt(8+CON)+((CON+2)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Guerreiro"){
    	var cv=parseInt(20+CON)+((CON+5)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Ladino"){
    	var cv=parseInt(12+CON)+((CON+3)*(lv-1));
        document.getElementById('pvt').value=cv      
    }
    if (classe=="Mago"){
    	var cv=parseInt(8+CON)+((CON+2)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Monge"){
    	var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Paladino"){
    	var cv=parseInt(20+CON)+((CON+5)*(lv-1));
   		document.getElementById('pvt').value=cv       
    }
    if (classe=="Ranger"){
    	var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Samurai"){
    	var cv=parseInt(20+CON)+((CON+5)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
    if (classe=="Swashbuckler"){
    	var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv       
    }
}
function f3(){
   	var forca =document.getElementById('FOR').value;
    var destreza =document.getElementById('DES').value;
    var constituicao =document.getElementById('CON').value;
    var inteligencia =document.getElementById('INT').value;
   	var sabedoria =document.getElementById('SAB').value;
    var carisma =document.getElementById('CAR').value;
    document.getElementById('MFOR').value=(forca-10)/2
    document.getElementById('MDES').value=(destreza-10)/2
    document.getElementById('MCON').value=(constituicao-10)/2
    document.getElementById('MINT').value=(inteligencia-10)/2
    document.getElementById('MSAB').value=(sabedoria-10)/2
    document.getElementById('MCAR').value=(carisma-10)/2

                

};