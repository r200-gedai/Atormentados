var array=[]
function salvar(){
    var ficha_nova = [];
    ficha_nova.push(document.getElementById('nomep').value);
    ficha_nova.push(document.getElementById('nomej').value);
    ficha_nova.push(document.getElementById('raca').value);
    ficha_nova.push(document.getElementById('classe').value);
    ficha_nova.push(document.getElementById('tendencia').value);
    ficha_nova.push(document.getElementById('sexo').value);
    ficha_nova.push(document.getElementById('idade').value);
    ficha_nova.push(document.getElementById('divindade').value);
    ficha_nova.push(document.getElementById('altura').value);
    ficha_nova.push(document.getElementById('deslocamento').value);
    ficha_nova.push(document.getElementById('pva').value);
    ficha_nova.push(document.getElementById('CAoutros').value);
    ficha_nova.push(document.getElementById('HabClasse').value);
    ficha_nova.push(document.getElementById('FOR').value);
    ficha_nova.push(document.getElementById('Talentos').value);
    ficha_nova.push(document.getElementById('DES').value);
    ficha_nova.push(document.getElementById('outroscc').value);
    ficha_nova.push(document.getElementById('modTamanho').value);
    ficha_nova.push(document.getElementById('outrosDis').value);
    ficha_nova.push(document.getElementById('CON').value);
    ficha_nova.push(document.getElementById('arma1').value);
    ficha_nova.push(document.getElementById('danoArma1').value);
    ficha_nova.push(document.getElementById('críticoArma1').value);
    ficha_nova.push(document.getElementById('distanciaArma1').value);
    ficha_nova.push(document.getElementById('arma2').value);
    ficha_nova.push(document.getElementById('danoArma2').value);
    ficha_nova.push(document.getElementById('críticoArma2').value);
    ficha_nova.push(document.getElementById('distanciaArma2').value);
    ficha_nova.push(document.getElementById('arma3').value);
    ficha_nova.push(document.getElementById('danoArma3').value);
    ficha_nova.push(document.getElementById('críticoArma3').value);
    ficha_nova.push(document.getElementById('arma1').value);
    ficha_nova.push(document.getElementById('arma2').value);
    ficha_nova.push(document.getElementById('arma3').value);
    ficha_nova.push(document.getElementById('INT').value);
    ficha_nova.push(document.getElementById('HabRaca').value);
    ficha_nova.push(document.getElementById('armadura1').value);
    ficha_nova.push(document.getElementById('BonusnaCA1').value);
    ficha_nova.push(document.getElementById('BMD1').value);
    ficha_nova.push(document.getElementById('Penalidade1').value);
    ficha_nova.push(document.getElementById('armadura2').value);
    ficha_nova.push(document.getElementById('BonusnaCA2').value)
    ficha_nova.push(document.getElementById('BMD2').value);
    ficha_nova.push(document.getElementById('Penalidade2').value);
    ficha_nova.push(document.getElementById('armadura3').value);
    ficha_nova.push(document.getElementById('BonusnaCA3').value);
    ficha_nova.push(document.getElementById('BMD3').value);
    ficha_nova.push(document.getElementById('Penalidade3').value);
    ficha_nova.push(document.getElementById('SAB').value);
    ficha_nova.push(document.getElementById('RFOROU').value);    
    ficha_nova.push(document.getElementById('RREFOU').value);
    ficha_nova.push(document.getElementById('RVONOU').value);
    ficha_nova.push(document.getElementById('CAR').value);
    ficha_nova.push(document.getElementById('INFORMACOES').value);
    ficha_nova.push(document.getElementById('HISTORIA').value);
    ficha_nova.push(document.getElementById('DINHEIRO').value);
    ficha_nova.push(document.getElementById('EQUIPAMENTOS').value);
    ficha_nova.push(document.getElementById('Magias').value);
    ficha_nova.push(document.getElementById('notas').value);
    ficha_nova.push(document.getElementById('PERSONALIDADE').value);
    ficha_nova.push(document.getElementById('APARENCIA').value);
    ficha_nova.push(document.getElementById('IDIOMAS').value);
    ficha_nova.push(document.getElementById('pesoTotal').value);
    ficha_nova.push(document.getElementById('pesoAtual').value);
    ficha_nova.push(document.getElementById('pmTotal').value);
    ficha_nova.push(document.getElementById('pmAtual').value);
    ficha_nova.push(document.getElementById('Acrobacia').value);
    ficha_nova.push(document.getElementById('AdestrarAnimais').value);
    ficha_nova.push(document.getElementById('Atletismo').value);
    ficha_nova.push(document.getElementById('tipoAtuação1').value);
    ficha_nova.push(document.getElementById('tipoAtuação2').value);
    ficha_nova.push(document.getElementById('Cavalgar').value);
    ficha_nova.push(document.getElementById('tipoConhecimento1').value);
    ficha_nova.push(document.getElementById('tipoConhecimento2').value);
    ficha_nova.push(document.getElementById('cura').value);
    ficha_nova.push(document.getElementById('Diplomacia').value);
    ficha_nova.push(document.getElementById('Enganacao').value);
    ficha_nova.push(document.getElementById('Furtividade').value);
    ficha_nova.push(document.getElementById('Magia').value);
    ficha_nova.push(document.getElementById('Iniciativa').value);
    ficha_nova.push(document.getElementById('Intimidacao').value);
    ficha_nova.push(document.getElementById('Intuicao').value);
    ficha_nova.push(document.getElementById('Ladinagem').value);
    ficha_nova.push(document.getElementById('ObtInfo').value);
    ficha_nova.push(document.getElementById('tipoOfício1').value);
    ficha_nova.push(document.getElementById('tipoOfício2').value);
    ficha_nova.push(document.getElementById('Percepcao').value);
    ficha_nova.push(document.getElementById('Sobrevivencia').value);
    ficha_nova.push(document.getElementById('periciaextra').value);
    ficha_nova.push(document.getElementById('modTamanhocc').value);
    array.push(ficha_nova);
    };
    function carregar(){
        i=parseInt(document.getElementById('numerodafichaarquivada').value);
        var arr = array[i];
        document.getElementById('nomep').value = arr[0];
        document.getElementById('nomej').value = arr[1];
        document.getElementById('raca').value = arr[2];
        document.getElementById('classe').value = arr[3];
        document.getElementById('tendencia').value = arr[4];
        document.getElementById('sexo').value = arr[5];
        document.getElementById('idade').value = arr[6];
        document.getElementById('divindade').value = arr[7];
        document.getElementById('altura').value = arr[8];
        document.getElementById('deslocamento').value = arr[9];
        document.getElementById('pva').value = arr[10];
        document.getElementById('CAoutros').value = arr[11];
        document.getElementById('HabClasse').value = arr[12];
        document.getElementById('FOR').value = arr[13];
        document.getElementById('Talentos').value = arr[14];
        document.getElementById('DES').value = arr[15];
        document.getElementById('outroscc').value = arr[16];
        document.getElementById('modTamanho').value = arr[17];
        document.getElementById('outrosDis').value = arr[18];
        document.getElementById('CON').value = arr[19];
        document.getElementById('arma1').value = arr[20];
        document.getElementById('danoArma1').value = arr[21];
        document.getElementById('críticoArma1').value = arr[22];
        document.getElementById('distanciaArma1').value = arr[23];
        document.getElementById('arma2').value = arr[24];
        document.getElementById('danoArma2').value = arr[25];
        document.getElementById('críticoArma2').value = arr[26];
        document.getElementById('distanciaArma2').value = arr[27];
        document.getElementById('arma3').value = arr[28];
        document.getElementById('danoArma3').value = arr[29];
        document.getElementById('críticoArma3').value = arr[30];
        document.getElementById('arma1').value = arr[31];
        document.getElementById('arma2').value = arr[32];
        document.getElementById('arma3').value = arr[33];
        document.getElementById('INT').value = arr[34];
        document.getElementById('HabRaca').value = arr[35];
        document.getElementById('armadura1').value = arr[36];
        document.getElementById('BonusnaCA1').value = arr[37];
        document.getElementById('BMD1').value = arr[38];
        document.getElementById('Penalidade1').value = arr[39];
        document.getElementById('armadura2').value = arr[40];
        document.getElementById('BonusnaCA2').value = arr[41];
        document.getElementById('BMD2').value = arr[42];
        document.getElementById('Penalidade2').value = arr[43];
        document.getElementById('armadura3').value = arr[44];
        document.getElementById('BonusnaCA3').value = arr[45];
        document.getElementById('BMD3').value = arr[46];
        document.getElementById('Penalidade3').value = arr[47];
        document.getElementById('SAB').value = arr[48];
        document.getElementById('RFOROU').value = arr[49];
        document.getElementById('RREFOU').value = arr[50];
        document.getElementById('RVONOU').value = arr[51];
        document.getElementById('CAR').value = arr[52];
        document.getElementById('INFORMACOES').value = arr[53];
        document.getElementById('HISTORIA').value = arr[54];
        document.getElementById('DINHEIRO').value = arr[55];
        document.getElementById('EQUIPAMENTOS').value = arr[56];
        document.getElementById('Magias').value = arr[57];
        document.getElementById('PERSONALIDADE').value = arr[58];
        document.getElementById('APARENCIA').value = arr[60];
        document.getElementById('IDIOMAS').value = arr[61];
        document.getElementById('pesoTotal').value = arr[62];
        document.getElementById('pesoAtual').value = arr[63];
        document.getElementById('pmTotal').value = arr[64];
        document.getElementById('pmAtual').value = arr[65];
        document.getElementById('Acrobacia').value = arr[66];
        document.getElementById('AdestrarAnimais').value = arr[67];
        document.getElementById('Atletismo').value = arr[68];
        document.getElementById('tipoAtuação1').value = arr[69];
        document.getElementById('tipoAtuação2').value = arr[70];
        document.getElementById('Cavalgar').value = arr[71];
        document.getElementById('tipoConhecimento1').value = arr[72];
        document.getElementById('tipoConhecimento2').value = arr[73];
        document.getElementById('cura').value = arr[74];
        document.getElementById('Diplomacia').value = arr[75];
        document.getElementById('Enganacao').value = arr[76];
        document.getElementById('Furtividade').value = arr[77];
        document.getElementById('Magia').value = arr[78];
        document.getElementById('Iniciativa').value = arr[79];
        document.getElementById('Intimidacao').value = arr[80];
        document.getElementById('Intuicao').value = arr[81];
        document.getElementById('Ladinagem').value = arr[82];
        document.getElementById('ObtInfo').value = arr[83];
        document.getElementById('tipoOfício1').value = arr[84];
        document.getElementById('tipoOfício2').value = arr[85];
        document.getElementById('Percepcao').value = arr[86];
        document.getElementById('Sobrevivencia').value = arr[87];
        document.getElementById('periciaextra').value = arr[88];
        document.getElementById('modTamanhocc').value = arr[89];
        console.log(arr);
    };
    function atualizar_status(forca,destreza,constituicao,inteligencia,sabedoria,carisma,deslocamento,altura,HabRaca){
     document.getElementById('FOR').value=forca;
     document.getElementById('DES').value=destreza;
     document.getElementById('CON').value=constituicao;
     document.getElementById('INT').value=inteligencia;
     document.getElementById('SAB').value=sabedoria;
     document.getElementById('CAR').value=carisma;
     document.getElementById('deslocamento').value=deslocamento;
     document.getElementById('altura').value=altura;
     document.getElementById('HabRaca').value=HabRaca;
     return;
}

function fraca(){
                var racas =document.getElementById('raca').value;
                var forca =parseInt(document.getElementById('FOR').value);
                var destreza =parseInt(document.getElementById('DES').value);
                var constituicao =parseInt(document.getElementById('CON').value);
                var inteligencia =parseInt(document.getElementById('INT').value);
                var sabedoria =parseInt(document.getElementById('SAB').value);
                var carisma =parseInt(document.getElementById('CAR').value);
                
                switch(racas){
                    case "Anão":
                        atualizar_status(forca+0, destreza-2, constituicao+4, inteligencia+0, sabedoria+2, carisma+0, " 6 Metros", "Médio", "Deslocamento 6m Visão no Escuro +4 em testes de resistência a venenos e magias Classe de armadura +4 contra adversários de tamanho Grande ou maior Para anões, todos os tipos de machados e martelos são armas simples +2 em testes de perícias para assuntos relacionados a pedra e metal");
                        break;
                    case "Elfo":
                        atualizar_status(forca+0, destreza+4, constituicao-2, inteligencia+2, sabedoria+0, carisma+0, " 9 Metros", "Médio", " Visão na Penumbra. Um elfo ignora camuflagem (mas não camuflagem total) por escuridão.Elfos podem ver duas vezes mais longe que os humanos em condições de pouca iluminação, como luz das estrelas e tochas. +4 em testes de Vontade contra encantamentos. Elfos também são imunes à magia sono. +4 em testes de Identificar Magia e Percepção. Elfos têm familiaridade com magia e sentidos apurados. A difi culdade do teste de resistência contra magias arcanas lançadas por um elfo aumenta em CD +2. Elfos sabem usar espadas curtas, espadas longas, floretes e arcos (curtos, longos e compostos). Elfos também recebem Foco em Arma para uma destas armas (à escolha do jogador) como um talento adicional.");
                        break;
                    case "Goblin":
                        atualizar_status(forca+0, destreza+4, constituicao+2, inteligencia+0, sabedoria+0, carisma-2, " 6 Metros", "Pequeno", "Deslocamento 9m  Visão no Escuro +4 em testes de Fortitude contra doenças e venenos Goblins não precisam fazer testes de Fortitude por ingerir comida estragada. +4 em testes de Ladinagem e Oficio (um à escolha do jogador");
                        break;
                    case "Halfling":
                        atualizar_status(forca-2, destreza+4, constituicao+0, inteligencia+0, sabedoria+0,carisma+2, " 6 Metros", "Pequeno", "+2 em todos os testes de resistência, por sua sorte incrível +1 em jogadas de ataque com armas de arremesso e fundas Para halflings a perícia Atletismo é baseada em Destreza, não em Força +4 em testes de Enganação");
                        break;
                    case "Humano":
                        atualizar_status(forca+0, destreza+0, constituicao+0, inteligencia+0, sabedoria+0, 0, " 9 Metros", "Médio", "+2 em duas habilidades à escolha do jogador 2 perícias treinadas extras, que não precisam ser escolhidas entre suas perícias de classe 2 talentos adicionais à escolha do jogador");
                        document.getElementById('contTalentos').value = parseInt(document.getElementById('contTalentos').value) + 2
                        break;
                    case "Lefou":
                        atualizar_status(forca+0, destreza+0, constituicao+0, inteligencia+0, sabedoria+0, carisma+0, " 9 Metros", "Médio", "•Monstro. Um lefou não é considerado humano ou humanoide. •Visão no escuro. •2 talentos da Tormenta adicionais. • Deformidade.O jogador deve escolher uma entre as seguintes. -Articulações flexíveis: +4 em testes de Acrobacia. -Dedos rígidos: deslocamento de escalada 4,5m. -Dentes afiados: +4 em testes de Intimidação. -Mãos membranosas: deslocamento de natação 4,5m. -Olhos vermelhos: +4 em testes de Percepção. -Pele rígida: classe de armadura +1. • Afinidade com a Tormenta.");
                        break;
                    case "Minotauro":
                        atualizar_status(forca+4, destreza+0, constituicao+2, inteligencia+0, sabedoria+0, carisma-2, " 9 Metros", "Médio", "• Classe de armadura +1. • Minotauros possuem um ataque natural de chifres (1d6, crítico x2, perfuração). Um minotauro pode realizar um ataque adicional por rodada com os chifres, mas provoca uma penalidade de –4 em todos os ataques (incluindo este). • Faro. Minotauros recebem +4 em testes de Sobrevivência para rastrear, e também detectam automaticamente a presença de criaturas a até 9m. • Lógica labiríntica. Minotauros têm excelente senso de direção, e recebem +8 em testes de Sobrevivência para não se perder. • Medo de altura. Caso tenha que subir qualquer altura superior a 3m (ou se estiver a até 3m de uma queda desta altura), um minotauro sofre penalidade de –4 em suas jogadas e testes. Ele também não pode realizar nenhuma ação que dependa de concentração, como conjurar magias.");
                        break;
                    case "Qareen":
                        atualizar_status(forca+0, destreza+0, constituicao+0, inteligencia+2, sabedoria-2, carisma+4, " 9 Metros", "Médio", "• +4 em testes de Identificar Magia. • Desejos. Uma vez por dia, o qareen pode lançar uma magia sem pagar PM (ou sem esquecê-la), mas apenas se fizer isso na mesma rodada em que alguém tiver lhe pedido. • Pequenos desejos. Mesmo que não pertença a uma classe conjuradora, um qareen pode lançar todos os truques. No entanto, ele só pode lançar estes truques quando outra pessoa pede. • Um qareen pode lançar a magia voo uma vez por dia. • Conforme sua descendência, um qareen tem resistência especial contra as seguintes formas de ataque: -Água: resistência a ácido e frio 5. -Ar: resistência a eletricidade e sônico 5. -Fogo: resistência a fogo 5. -Terra: redução de dano 3/cortante ou per furante. -Luz: resistência a eletricidade 10. -Trevas: resistência a ácido e energia negativa 5. “Energia negativa” é provocada por efeitos e magias necromânticos (como infligir ferimentos).");
                        break;
                    case "Gnomo":
                        atualizar_status(forca-2, destreza+0, constituicao+2, inteligencia+4, sabedoria+0, carisma+0, " 6 Metros", "Pequeno", "• Visão na Penumbra. Um gnomo ignora camuflagem (mas não camufl agem total) por escuridão. Gnomos podem ver duas vezes mais longe que os humanos em condições de pouca iluminação, como luz das estrelas e tochas. • +4 em testes de Intuição e Ofícios (alquimia). Gnomos são perspicazes e familiarizados com ilusões e poções. • Classe de armadura +4 contra adversários de tamanho Grande ou maior. • Gnomos podem se comunicar com animais livremente. Veja a descrição da magia falar com animais. • Um gnomo com Carisma 10 ou mais pode lançar as seguintes magias livremente: globos de luz, som fantasma, prestidigitação.");
                        break;
                    case "Meio-Elfo":
                        atualizar_status(forca+0, destreza+2, constituicao+0, inteligencia+0, sabedoria+0, carisma+0, " 9 Metros", "Médio", "• Visão na Penumbra. Um meio-elfo ignora camufl agem (mas não camufl agem total) por escuridão. Meio-elfos podem ver duas vezes mais longe que os humanos em condições de pouca iluminação, como luz das estrelas e tochas. • 1 talento bônus à escolha do jogador. • 1 perícia treinada extra, que não precisa ser escolhida entre suas perícias de classe. • +2 em testes de Vontade contra encantamentos. • +2 em testes de Identifi car Magia e Percepção");
                        break;
                    case "Meio-Orc":
                        atualizar_status(forca+2, destreza+0, constituicao+0, inteligencia+0, sabedoria+0, carisma+0, " 9 Metros", "Médio", "• Visão no Escuro. Meio-orcs podem enxergar no escuro a até 18 metros, apenas em preto e branco. Um meio-orc ignora camufl agem (incluindo camufl agem total) por escuridão. • Meio-orcs recebem Duro de Matar como um talento adicional. • +4 em testes de Intimidação. Meio-orcs são ameaçadores.");
                        break;
                    default:
                        alert("Erro ao escolher a raça!")
                }
            }
            
            
function fclasse(){
    var classe=document.getElementById('classe').value;
    
    var FOR=parseInt(document.getElementById('MFOR').value);
    var DES=parseInt(document.getElementById('MDES').value);
    var CON=parseInt(document.getElementById('MCON').value);
    var INT=parseInt(document.getElementById('MINT').value);
    var SAB=parseInt(document.getElementById('MSAB').value);
    var CAR=parseInt(document.getElementById('MCAR').value);
    
    var acrobacia=document.getElementById('Acrobacia');
    var adsanimal=document.getElementById('AdestrarAnimais');
    var atletismo=document.getElementById('Atletismo');
    var atuacao=document.getElementById('Atuacao');
    var atuacao2=document.getElementById('Atuacao');
    var cavalgar=document.getElementById('Cavalgar');
    var conhecimento=document.getElementById('Conhecimento');
    var conhecimento2=document.getElementById('Conhecimento');
    var cura=document.getElementById('cura');
    var diplomacia=document.getElementById('Diplomacia');
    var enganacao=document.getElementById('Enganacao');
    var furtividade=document.getElementById('Furtividade');
    var idmagia=document.getElementById('Magia');
    var iniciativa=document.getElementById('Iniciativa');
    var intimidacao=document.getElementById('Intimidacao');
    var intuicao=document.getElementById('Intuicao');
    var ladinagem=document.getElementById('Ladinagem');
    var obtinfo=document.getElementById('ObtInfo');
    var oficio=document.getElementById('Oficio');
    var oficio2=document.getElementById('Oficio');
    var percepcao=document.getElementById('Percepcao');
    var sobrevivencia=document.getElementById('Sobrevivencia');

    var lv=parseInt(document.getElementById('nivel').value);
    if (classe=="Bárbaro"){
        //=======vida=======
        var cv=parseInt(24+CON)+((CON+6)*(lv-1));
        document.getElementById('pvt').value=cv
        //========BBA=======
        document.getElementById('BBA').value=lv
        document.getElementById('BBA2').value=lv
        document.getElementById('BBA3').value=lv
        document.getElementById('BBA4').value=lv
        document.getElementById('BBA5').value=lv
        //=====pericias=====
        var contpr=parseInt (6+INT);
        /*#00FF00
          #98FB98
          #00FF7F
          #00FF00
          #00EE00
          #00CD00 */
        document.getElementById('AdestrarAnimais').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Intimidacao').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        document.getElementById('Percepcao').style.color = "#00FF00";
        document.getElementById('Sobrevivencia').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value=" Usar Armaduras (leves e médias), Usar Armas (simples e marciais), Usar Escudos, Fortitude Maior"        
        
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Anafalbetismo, fúria 1/dia, movimento rápido"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Esquiva Sobrenatural"
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", Instinto selvagem +1"
        }
        if (lv>=4) {
            document.getElementById('HabClasse').value+=", Fúria 2/dia "
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Esquiva sobrenatural aprimorada"
        }
        if (lv>=7) {
            document.getElementById('HabClasse').value+=", Redução de dano 1"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Fúria 3/dia "
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Instinto selvagem +2"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Redução de dano 2"
        }
        if (lv>=11) {
            document.getElementById('HabClasse').value+=", Fúria maior"
        }
        if (lv>=12) {
            document.getElementById('HabClasse').value+=", Fúria 4/dia "
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Redução de dano 3 "
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value+=", Vontade inabalável"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Instinto selvagem +3"
        }
        if (lv>=16) {
            document.getElementById('HabClasse').value+=", Fúria 5/dia, redução de dano 4"
        }
        if (lv>=17) {
            document.getElementById('HabClasse').value+=", Fúria incansável"
        }
        if (lv>=19) {
            document.getElementById('HabClasse').value+=", Redução de dano 5"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Fúria 6/dia, fúria poderosa"
        }

    }
    if (classe=="Bardo"){
        //=======vida=======
        var cv=parseInt(12+CON)+((CON+3)*(lv-1));
        document.getElementById('pvt').value=cv
        //========BBA=======
        var bba=0;
        if (lv==2){
            bba=1;
        }
        else if(lv==3){
            bba=2;
        }
        else if(lv==4 || lv==5){
            bba=3;
        }
        else if(lv==6){
            bba=4;
        }
        else if (lv==7) {
            bba=5;
        }
        else if (lv==8 || lv==9) {
            bba=6;
        }
        else if (lv==10) {
            bba=7;
        }
        else if(lv==11){
            bba=8;
        }
        else if(lv==12 || lv==13){
            bba=9;
        }
        else if(lv==14){
            bba=10;
        }
        else if (lv==15) {
            bba=11;
        }
        else if (lv==16 || lv==17) {
            bba=12;
        }
        else if(lv==18){
            bba=13;
        }
        else if (lv==19) {
            bba=14;
        }
        else if (lv==20) {
            bba=15;
        }
        document.getElementById('BBA').value=bba
        document.getElementById('BBA2').value=bba
        document.getElementById('BBA3').value=bba
        document.getElementById('BBA4').value=bba
        document.getElementById('BBA5').value=bba
        //=====pericias=====
        var contpr=parseInt (6+INT);
        document.getElementById('Acrobacia').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Atuacao').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Furtividade').style.color = "#00FF00";
        document.getElementById('Magia').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Intuicao').style.color = "#00FF00";
        document.getElementById('Ladinagem').style.color = "#00FF00";
        document.getElementById('ObtInfo').style.color = "#00FF00";
        document.getElementById('Percepcao').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value="Usar Armaduras (leves), Usar Armas (simples e marciais), Usar Escudos, Refl exos Rápidos, Vontade de Ferro"
        
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Conhecimento de bardo, música de bardo"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=4) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=6) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=12) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=16) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=18) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Música de bardo"
        }
    }
    if (classe=="Clérigo"){
        //=======vida=======
        var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA========
        var bba=0;
        if (lv==2){
            bba=1;
        }
        else if(lv==3){
            bba=2;
        }
        else if(lv==4 || lv==5){
            bba=3;
        }
        else if(lv==6){
            bba=4;
        }
        else if (lv==7) {
            bba=5;
        }
        else if (lv==8 || lv==9) {
            bba=6;
        }
        else if (lv==10) {
            bba=7;
        }
        else if(lv==11){
            bba=8;
        }
        else if(lv==12 || lv==13){
            bba=9;
        }
        else if(lv==14){
            bba=10;
        }
        else if (lv==15) {
            bba=11;
        }
        else if (lv==16 || lv==17) {
            bba=12;
        }
        else if(lv==18){
            bba=13;
        }
        else if (lv==19) {
            bba=14;
        }
        else if (lv==20) {
            bba=15;
        }
        document.getElementById('BBA').value=bba
        document.getElementById('BBA2').value=bba
        document.getElementById('BBA3').value=bba
        document.getElementById('BBA4').value=bba
        document.getElementById('BBA5').value=bba
        //=====Pericias=====
        var contpr=parseInt (2+INT);
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('cura').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('Magia').style.color = "#00FF00";
        document.getElementById('Intuicao').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value=" Usar Armaduras (leves, médias e pesadas), Usar Armas Simples, Usar Escudos, Fortitude Maior, Vontade de Ferro"
    
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Devoto, canalizar energia 1d6, poder divino"
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", Canalizar energia 2d6"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Canalizar energia 3d6, poder divino"
        }
        if (lv>=7) {
            document.getElementById('HabClasse').value+=", Canalizar energia 5d6"
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Canalizar energia 5d6"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Poder divino"
        }
        if (lv>=11) {
            document.getElementById('HabClasse').value+=", Canalizar energia 6d6"
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Canalizar energia 7d6"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Canalizar energia 8d6, poder divino"
        }
        if (lv>=17) {
            document.getElementById('HabClasse').value+=", Canalizar energia 9d6"
        }
        if (lv>=19) {
            document.getElementById('HabClasse').value+=", Canalizar energia 10d6"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Poder divino"
        }
    }
    if (classe=="Druida"){
        //=======vida=======
        var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA========
        var bba=0;
        if (lv==2){
            bba=1;
        }
        else if(lv==3){
            bba=2;
        }
        else if(lv==4 || lv==5){
            bba=3;
        }
        else if(lv==6){
            bba=4;
        }
        else if (lv==7) {
            bba=5;
        }
        else if (lv==8 || lv==9) {
            bba=6;
        }
        else if (lv==10) {
            bba=7;
        }
        else if(lv==11){
            bba=8;
        }
        else if(lv==12 || lv==13){
            bba=9;
        }
        else if(lv==14){
            bba=10;
        }
        else if (lv==15) {
            bba=11;
        }
        else if (lv==16 || lv==17) {
            bba=12;
        }
        else if(lv==18){
            bba=13;
        }
        else if (lv==19) {
            bba=14;
        }
        else if (lv==20) {
            bba=15;
        }
        document.getElementById('BBA').value=bba
        document.getElementById('BBA2').value=bba
        document.getElementById('BBA3').value=bba
        document.getElementById('BBA4').value=bba
        document.getElementById('BBA5').value=bba
        //=====Pericias=====
        var contpr=parseInt(4+INT);
        document.getElementById('AdestrarAnimais').style.color="#00ff00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('cura').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('Magia').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        document.getElementById('Percepcao').style.color = "#00FF00";
        document.getElementById('Sobrevivencia').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value=" Usar Armaduras (leves e médias), Usar Armas Simples, Usar Escudos, Fortitude Maior, Vontade de Ferro, Senso da Natureza"
        
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Código de conduta, devoto, empatia selvagem, vínculo natural"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Caminho da floresta "
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", Rastro invisível"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Forma selvagem"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Forma selvagem (2 habilidades)"
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Imunidade a venenos"
        }
        if (lv>=11) {
            document.getElementById('HabClasse').value+=", Forma selvagem aprimorada"
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Mil faces"
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value+=", Forma selvagem (3 habilidades)"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Corpo atemporal"
        }
        if (lv>=17) {
            document.getElementById('HabClasse').value+=", Forma selvagem maior"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Forma selvagem (4 habilidades)"
        }
    }
    if (classe=="Feiticeiro"){
        //=======vida=======
        var cv=parseInt(8+CON)+((CON+2)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA=======
        var bba=0;
        if (lv==2 || lv==3) {
            bba=1;
        }
        else if (lv==5 || lv==4) {
            bba=2
        }
        else if (lv==7 || lv==6) {
            bba=3
        }
        else if (lv==9 || lv==8) {
            bba=4
        }
        else if (lv==11 || lv==10) {
            bba=5
        }
        else if (lv==13 || lv==12) {
            bba=6
        }
        else if (lv==15 || lv==14) {
            bba=7
        }
        else if (lv==17 || lv==16) {
            bba=8
        }
        else if (lv==19 || lv==18) {
            bba=9
        }
        else if (lv==18) {
            bba=10
        }       
        document.getElementById('BBA').value=bba
        document.getElementById('BBA2').value=bba
        document.getElementById('BBA3').value=bba
        document.getElementById('BBA4').value=bba
        document.getElementById('BBA5').value=bba
        //=====Pericias=====
        var contpr=parseInt(2+INT);
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('Enganacao').style.color = "#00FF00";
        document.getElementById('Magia').style.color = "#00FF00";
        document.getElementById('Intimidacao').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value="Usar Armas Simples, Vontade de Ferro"
        if (lv>=1) {
            document.getElementById('HabClasse').value+=" Linhagem sobrenatural"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Linhagem sobrenatural"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Linhagem sobrenatural"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Linhagem sobrenatural"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Linhagem sobrenatural"
        }
    }
    if (classe=="Guerreiro"){
        //=======vida=======
        var cv=parseInt(20+CON)+((CON+5)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA=======
        document.getElementById('BBA').value=lv
        document.getElementById('BBA2').value=lv
        document.getElementById('BBA3').value=lv
        document.getElementById('BBA4').value=lv
        document.getElementById('BBA5').value=lv
        //=======BBA=======
        var contpr=parseInt (2+INT);
        document.getElementById('AdestrarAnimais').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Intimidacao').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        document.getElementById('Percepcao').style.color = "#00FF00";        
        //=====Talentos=====
        document.getElementById('Talentos').value=" Usar Armaduras (leves, médias e pesadas), Usar Armas (simples e marciais), Usar Escudos, Fortitude Maior"
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Técnica de luta"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=4) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=6) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=12) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=16) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=18) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
    }
    if (classe=="Ladino"){
        //=======vida=======
        var cv=parseInt(12+CON)+((CON+3)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA=======
        var bba=0;
        if (lv==2){
            bba=1;
        }
        else if(lv==3){
            bba=2;
        }
        else if(lv==4 || lv==5){
            bba=3;
        }
        else if(lv==6){
            bba=4;
        }
        else if (lv==7) {
            bba=5;
        }
        else if (lv==8 || lv==9) {
            bba=6;
        }
        else if (lv==10) {
            bba=7;
        }
        else if(lv==11){
            bba=8;
        }
        else if(lv==12 || lv==13){
            bba=9;
        }
        else if(lv==14){
            bba=10;
        }
        else if (lv==15) {
            bba=11;
        }
        else if (lv==16 || lv==17) {
            bba=12;
        }
        else if(lv==18){
            bba=13;
        }
        else if (lv==19) {
            bba=14;
        }
        else if (lv==20) {
            bba=15;
        }
        document.getElementById('BBA').value=bba
        document.getElementById('BBA2').value=bba
        document.getElementById('BBA3').value=bba
        document.getElementById('BBA4').value=bba
        document.getElementById('BBA5').value=bba
        //=====Pericias=====
        var contpr=parseInt (8+INT);
        document.getElementById('Acrobacia').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Atuacao').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('Enganacao').style.color = "#00FF00";
        document.getElementById('Furtividade').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Intimidacao').style.color = "#00FF00";
        document.getElementById('Intuicao').style.color = "#00FF00";
        document.getElementById('Ladinagem').style.color = "#00FF00";
        document.getElementById('ObtInfo').style.color = "#00FF00";
        document.getElementById('ObtInfo').style.color = "#00FF00";
        document.getElementById('Percepcao').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value=" Usar Armaduras (leves), Usar Armas (simples e marciais), Usar Escudos, Refl exos Rápidos"
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Ataque furtivo +1d6, encontrar armadilhas"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Evasão, técnica ladina"
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", Ataque furtivo +2d6, sentir armadilhas +1"
        }
        if (lv>=4) {
            document.getElementById('HabClasse').value+=", Esquiva sobrenatural"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Ataque furtivo +3d6, técnica ladina"
        }
        if (lv>=6) {
            document.getElementById('HabClasse').value+=", Sentir armadilhas +2"
        }
        if (lv>=7) {
            document.getElementById('HabClasse').value+=", Ataque furtivo +4d6"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Esquiva sobrenatural aprimorada, técnica ladina"
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Ataque furtivo +5d6, sentir armadilhas +3"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Evasão aprimorada"
        }
        if (lv>=11) {
            document.getElementById('HabClasse').value=" Ataque furtivo +6d6, técnica ladina"
        }
        if (lv>=12) {
            document.getElementById('HabClasse').value+=", Sentir armadilhas +4"
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Ataque furtivo +7d6"
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value+=", Técnica ladina"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Ataque furtivo +8d6, sentir armadilhas +5"
        }
        if (lv>=17) {
            document.getElementById('HabClasse').value+=", Ataque furtivo +9d6, técnica ladina"
        }
        if (lv>=18) {
            document.getElementById('HabClasse').value+=", Sentir armadilhas +6"
        }
        if (lv>=19) {
            document.getElementById('HabClasse').value+=", Ataque furtivo +10d6"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Técnica ladina"
        }
    }
    if (classe=="Mago"){
        //=======vida=======
        var cv=parseInt(8+CON)+((CON+2)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA========
        var bba=0;
        if (lv==2 || lv==3) {
            bba=1;
        }
        else if (lv==5 || lv==4) {
            bba=2
        }
        else if (lv==7 || lv==6) {
            bba=3
        }
        else if (lv==9 || lv==8) {
            bba=4
        }
        else if (lv==11 || lv==10) {
            bba=5
        }
        else if (lv==13 || lv==12) {
            bba=6
        }
        else if (lv==15 || lv==14) {
            bba=7
        }
        else if (lv==17 || lv==16) {
            bba=8
        }
        else if (lv==19 || lv==18) {
            bba=9
        }
        else if (lv==18) {
            bba=10
        }      
        document.getElementById('BBA').value=bba
        document.getElementById('BBA2').value=bba
        document.getElementById('BBA3').value=bba
        document.getElementById('BBA4').value=bba
        document.getElementById('BBA5').value=bba
        //=====Pericias=====
        var contpr=parseInt (2+INT);
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('Magia').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        document.getElementById('Percepcao').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value="Usar Armas (simples), Vontade de Ferro"
        if (lv>=1) {
            document.getElementById('HabClasse').value+=" Mistérios arcanos, vínculo arcano"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Mistérios arcanos"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Mistérios arcanos"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Mistérios arcanos"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Linhagem sobrenatural"
        }
    }
    if (classe=="Monge"){
        //=======Vida=======
        var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA========       
        document.getElementById('BBA').value=lv
        document.getElementById('BBA2').value=lv
        document.getElementById('BBA3').value=lv
        document.getElementById('BBA4').value=lv
        document.getElementById('BBA5').value=lv
        //=====Pericias=====
        var contpr=parseInt (4+INT);
        document.getElementById('Acrobacia').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('cura').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('Furtividade').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Intuicao').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        document.getElementById('Percepcao').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value="Usar Armas (simples), Usar Arma Exótica (nun chaku, sai, shuriken), Fortitude Maior, Reflexos Rápidos, Vontade de Ferro, Ataque Desarmado Aprimorado"
        if (lv>=1) {
            document.getElementById('HabClasse').value="Dano desarmado (1d6), rajada de golpes, sexto sentido, técnica de luta"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Evasão, técnica de luta"
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", Movimento rápido +3m"
        }
        if (lv>=4) {
            document.getElementById('HabClasse').value+=", Ataque chi (mágico), dano desarmado (1d8), movimento ágil +5"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Bônus na CA +1"
        }
        if (lv>=6) {
            document.getElementById('HabClasse').value+=", Movimento rápido +6m, técnica de luta"
        }
        if (lv>=7) {
            document.getElementById('HabClasse').value+=", Integridade corporal"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Dano desarmado (1d10)"
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Evasão aprimorada, movimento rápido +9m, movimento ágil +10"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Ataque chi (tendência), bônus na CA +2, técnica de luta"
        }
        if (lv>=11) {
            document.getElementById('HabClasse').value=" Corpo de diamante, rajada de golpes aprimorada"
        }
        if (lv>=12) {
            document.getElementById('HabClasse').value+=", Dano desarmado (2d6), movimento rápido +12m"
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Alma de diamante"
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value+=", Movimento ágil +15, técnica de luta"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Bônus na CA +3, mão vibrante, movimento rápido +15m"
        }
        if (lv>=16) {
            document.getElementById('HabClasse').value+=", Ataque chi (adamante), dano desarmado (2d8)"
        }
        if (lv>=17) {
            document.getElementById('HabClasse').value+=", Corpo atemporal, idiomas do sol e da lua"
        }
        if (lv>=18) {
            document.getElementById('HabClasse').value+=", Movimento rápido +18m, técnica de luta"
        }
        if (lv>=19) {
            document.getElementById('HabClasse').value+=", Corpo vazio, movimento ágil +20"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Autoperfeição, bônus na CA +4, dano desarmado (2d10)"
        }
    }
    if (classe=="Paladino"){
        //=======Vida=======
        var cv=parseInt(20+CON)+((CON+5)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA========
        document.getElementById('BBA').value=lv
        document.getElementById('BBA2').value=lv
        document.getElementById('BBA3').value=lv
        document.getElementById('BBA4').value=lv
        document.getElementById('BBA5').value=lv
        //=====Pericias=====
        var contpr=parseInt (2+INT);
        document.getElementById('AdestrarAnimais').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('cura').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Intuicao').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value=" Usar Armaduras (leves, médias e pesadas), Usar Armas (simples e marciais), Usar Escudos, Fortitude Maior"
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Código de conduta, destruir o mal 1/dia, detectar o mal, devoto"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Cura pelas mãos 1d8+1, graça divina"
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", Aura de coragem, saúde divina"
        }
        if (lv>=4) {
            document.getElementById('HabClasse').value+=", Canalizar energia positiva 1d6, destruir o mal 2/dia"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Bênção da justiça, vínculo divino"
        }
        if (lv>=6) {
            document.getElementById('HabClasse').value+=", Cura pelas mãos 2d8+2, remover condição"
        }
        if (lv>=7) {
            document.getElementById('HabClasse').value+=", Destruir o mal 3/dia"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Canalizar energia positiva 2d6"
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Remover condição"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Cura pelas mãos 3d8+3, destruir o mal 4/dia"
        }
        if (lv>=12) {
            document.getElementById('HabClasse').value+=", Canalizar energia positiva 3d6, remover condição"
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Destruir o mal 5/dia"
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value+=", Cura pelas mãos 4d8+4"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Remover condição"
        }
        if (lv>=16) {
            document.getElementById('HabClasse').value+=", Canalizar energia positiva 4d6, destruir o mal 6/dia"
        }
        if (lv>=18) {
            document.getElementById('HabClasse').value+=", Cura pelas mãos 5d8+5, remover condição"
        }
        if (lv>=19) {
            document.getElementById('HabClasse').value+=", Destruir o mal 7/dia"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Canalizar energia positiva 5d6"
        }
    }
    if (classe=="Ranger"){
        //=======Vida=======
        var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv 
        //=======BBA========
        document.getElementById('BBA').value=lv
        document.getElementById('BBA2').value=lv
        document.getElementById('BBA3').value=lv
        document.getElementById('BBA4').value=lv
        document.getElementById('BBA5').value=lv
        //=====Pericias=====
        var contpr=parseInt (6+INT);
        document.getElementById('AdestrarAnimais').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('cura').style.color = "#00FF00";
        document.getElementById('Furtividade').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";
        document.getElementById('Percepcao').style.color = "#00FF00";              
        document.getElementById('Sobrevivencia').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value=" Usar Armaduras (leves e médias), Usar Armas (simples e marciais), Usar Escudos, Fortitude Maior, Reflexos Rápidos, Rastrear"
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Empatia selvagem, 1º inimigo predileto"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Estilo de combate"
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", 1º terreno predileto, Tolerância"
        }
        if (lv>=4) {
            document.getElementById('HabClasse').value+=", Vínculo selvagem"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Bênção da natureza, 2º inimigo predileto"
        }
        if (lv>=6) {
            document.getElementById('HabClasse').value+=", Estilo de combate aprimorado"
        }
        if (lv>=7) {
            document.getElementById('HabClasse').value+=", Caminho da floresta"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Rastreador eficaz, 2º terreno predileto"
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Evasão"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", 3º inimigo predileto"
        }
        if (lv>=11) {
            document.getElementById('HabClasse').value=", Domínio do estilo de combate"
        }
        if (lv>=12) {
            document.getElementById('HabClasse').value+=", Rastro invisível"
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Camuflagem, 3º terreno predileto"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", 4º inimigo predileto"
        }
        if (lv>=17) {
            document.getElementById('HabClasse').value+=", Mimetismo"
        }
        if (lv>=18) {
            document.getElementById('HabClasse').value+=", 4º terreno predileto"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", 5º inimigo predileto"
        }
    }
    if (classe=="Samurai"){
        //=======Vida=======
        var cv=parseInt(20+CON)+((CON+5)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA========       
        document.getElementById('BBA').value=lv
        document.getElementById('BBA2').value=lv
        document.getElementById('BBA3').value=lv
        document.getElementById('BBA4').value=lv
        document.getElementById('BBA5').value=lv
        //=====Pericias=====
        var contpr=parseInt (4+INT);
        document.getElementById('Acrobacia').style.color = "#00FF00";
        document.getElementById('AdestrarAnimais').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Atuacao').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Conhecimento').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Intimidacao').style.color = "#00FF00";
        document.getElementById('Intuicao').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";              
        document.getElementById('Percepcao').style.color = "#00FF00";
        //=====Talentos=====
        document.getElementById('Talentos').value="Usar Armaduras (leves, médias e pesadas), Usar Armas (simples e marciais), Fortitude Maior, Vontade de Ferro"
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Espadas ancestrais +1"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Estilo de combate, grito de kiai"
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", Espadas ancestrais +2"
        }
        if (lv>=4) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Espadas ancestrais +3"
        }
        if (lv>=6) {
            document.getElementById('HabClasse').value+=", Estilo de combate Aprimorado"
        }
        if (lv>=7) {
            document.getElementById('HabClasse').value+=", Espadas ancestrais +4"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Espadas ancestrais +5"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Grito de kiai aprimorado"
        }
        if (lv>=11) {
            document.getElementById('HabClasse').value=" Espadas ancestrais +6"
        }
        if (lv>=12) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Espadas ancestrais +7"
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value+=", Olhar assustador em massa"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Espadas ancestrais +8"
        }
        if (lv>=16) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=17) {
            document.getElementById('HabClasse').value+=", Espadas ancestrais +9"
        }
        if (lv>=18) {
            document.getElementById('HabClasse').value+=", Grito de kiai maior"
        }
        if (lv>=19) {
            document.getElementById('HabClasse').value+=", Espadas ancestrais +10"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
    }
    if (classe=="Swashbuckler"){
        //=======Vida=======
        var cv=parseInt(16+CON)+((CON+4)*(lv-1));
        document.getElementById('pvt').value=cv
        //=======BBA========       
        document.getElementById('BBA').value=lv
        document.getElementById('BBA2').value=lv
        document.getElementById('BBA3').value=lv
        document.getElementById('BBA4').value=lv
        document.getElementById('BBA5').value=lv
        //=====Pericias=====
        var contpr=parseInt (4+INT);
        document.getElementById('Acrobacia').style.color = "#00FF00";
        document.getElementById('Atletismo').style.color = "#00FF00";
        document.getElementById('Atuacao').style.color = "#00FF00";
        document.getElementById('Cavalgar').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('Enganacao').style.color = "#00FF00";
        document.getElementById('Furtividade').style.color = "#00FF00";
        document.getElementById('Iniciativa').style.color = "#00FF00";
        document.getElementById('Intimidacao').style.color = "#00FF00";
        document.getElementById('ObtInfo').style.color = "#00FF00";
        document.getElementById('Oficio').style.color = "#00FF00";              
        document.getElementById('Percepcao').style.color = "#00FF00";       
        //=====Talentos=====
        document.getElementById('Talentos').value="Usar Armaduras (leves), Usar Armas (simples e marciais), Reflexos Rápidos"
        if (lv>=1) {
            document.getElementById('HabClasse').value=" Autoconfiança, técnica de luta"
        }
        if (lv>=2) {
            document.getElementById('HabClasse').value+=", Estilo de combate, evasão, técnica de luta"
        }
        if (lv>=3) {
            document.getElementById('HabClasse').value+=", Presença paralisante"
        }   
        if (lv>=5) {
            document.getElementById('HabClasse').value+=", Bônus na CA +1"
        }
        if (lv>=6) {
            document.getElementById('HabClasse').value+=", Estilo de combate aprimorado, técnicade luta"
        }
        if (lv>=8) {
            document.getElementById('HabClasse').value+=", Herói ávido"
        }
        if (lv>=9) {
            document.getElementById('HabClasse').value+=", Evasão aprimorada"
        }
        if (lv>=10) {
            document.getElementById('HabClasse').value+=", Bônus na CA +2, técnica de luta"
        }
        if (lv>=11) {
            document.getElementById('HabClasse').value+=", Domínio do estilo de combate"
        }
        if (lv>=13) {
            document.getElementById('HabClasse').value+=", Sortudo"
        }
        if (lv>=14) {
            document.getElementById('HabClasse').value=", Técnica de luta"
        }
        if (lv>=15) {
            document.getElementById('HabClasse').value+=", Bônus na CA +3"
        }
        if (lv>=16) {
            document.getElementById('HabClasse').value+=", Mente escorregadia"
        }
        if (lv>=18) {
            document.getElementById('HabClasse').value+=", Técnica de luta"
        }
        if (lv>=20) {
            document.getElementById('HabClasse').value+=", Bônus na CA +4"
        }
    }
    //=========Contador de Talentos=============
    switch(lv){
        case 1:
        case 2:
            document.getElementById('contTalentos').value=1 
            break;
        case 3:
        case 4:
            document.getElementById('contTalentos').value=2        
            break;
        case 5:
        case 6:
            document.getElementById('contTalentos').value=3
            break;
        case 7:
        case 8:
            document.getElementById('contTalentos').value=4
            break; 
        case 9:
        case 10:
            document.getElementById('contTalentos').value=5
            break;
        case 11:
        case 12:
            document.getElementById('contTalentos').value=6
            break; 
        case 13:
        case 14:
            document.getElementById('contTalentos').value=7
            break;
        case 15:
        case 16:
            document.getElementById('contTalentos').value=8
            break;
        case 17:
        case 18:
            document.getElementById('contTalentos').value=9
            break;
        case 19:
        case 20:
            document.getElementById('contTalentos').value=10       
            break;
        default:        
    }
    //=========Ataque==========
    var modtamanho = parseInt(0);
    if (altura=="Mínimo") {
        modtamanho = parseInt(2);
    }
    else if (altura=="Pequeno") {
        modtamanho = parseInt(1);
    }
    else if (altura=="Médio") {
        modtamanho = parseInt(0);
    }
    else if (altura=="Grande") {
        modtamanho = parseInt(-1);
    }
    else if (altura=="Enorme") {
        modtamanho = parseInt(-2);
    }
    else if (altura=="Descomunal") {
        modtamanho = parseInt(-4);
    }
    var bbaa =parseInt(document.getElementById('BBA'))

    var oucc =parseInt(document.getElementById('outroscc').value);
    var oudis =parseInt(document.getElementById('outrosDis').value);

    document.getElementById('ataqueCC').value=parseInt(bbaa+FOR+modtamanho+oucc);
    document.getElementById('modHabilidadecc').value=FOR;
    document.getElementById('modTamanhocc').value=modtamanho;

    document.getElementById('ataqueDis').value=parseInt(bbaa+DES+modtamanho+oudis);
    document.getElementById('modHabilidaded').value=DES;
    document.getElementById('modTamanhocc').value=modtamanho;

}
function f3(){ //Calcula Modificadores de habilidade. Ativada o modificar qualquer valor de habilidade
    var forca =document.getElementById('FOR').value;
    var destreza =document.getElementById('DES').value;
    var constituicao =document.getElementById('CON').value;
    var inteligencia =document.getElementById('INT').value;
    var sabedoria =document.getElementById('SAB').value;
    var carisma =document.getElementById('CAR').value;


    document.getElementById('MFOR').value=parseInt((forca-10)/2)
    document.getElementById('MDES').value=parseInt((destreza-10)/2)
    document.getElementById('MCON').value=parseInt((constituicao-10)/2)
    document.getElementById('MINT').value=parseInt((inteligencia-10)/2)
    document.getElementById('MSAB').value=parseInt((sabedoria-10)/2)
    document.getElementById('MCAR').value=parseInt((carisma-10)/2) 

};
function f4(){//Calcula as resistencias da personagem. Ativada ao modificar DES, CON, SAB
    var lv =document.getElementById('nivel').value;
    var forca =parseInt(document.getElementById('MCON').value);
    var des =parseInt(document.getElementById('MDES').value);
    var sab =parseInt(document.getElementById('MSAB').value);
    var fou =parseInt(document.getElementById('RFOROU').value);
    var rou =parseInt(document.getElementById('RREFOU').value);
    var vou =parseInt(document.getElementById('RVONOU').value);
    var mlv =parseInt (lv/2);
    document.getElementById('RFORT').value=parseInt(mlv+forca+fou)
    document.getElementById('RFORLV').value=parseInt(mlv)
    document.getElementById('RFORMOD').value=parseInt(forca)
    
    
    document.getElementById('RREFT').value=parseInt(mlv+des+rou)
    document.getElementById('RREFLV').value=parseInt(mlv)
    document.getElementById('RREFMOD').value=parseInt(des)
    
    document.getElementById('RVONT').value=parseInt(mlv+sab+vou)
    document.getElementById('RVONLV').value=parseInt(mlv)
    document.getElementById('RVONMOD').value=parseInt(sab)       
};
function f5(){//Função para calcular CA. Ativada ao mudar a destreza ou adicionar um escudo ou armadura
    var lv =parseInt(document.getElementById('nivel').value);
    var mlv =parseInt (lv/2);
    var des =parseInt(document.getElementById('MDES').value);
    var bca1 =parseInt(document.getElementById('BonusnaCA1').value);
    var bca2 =parseInt(document.getElementById('BonusnaCA2').value);
    var bca3 =parseInt(document.getElementById('BonusnaCA3').value);
    var caou =parseInt(document.getElementById('CAoutros').value);
    //ca-10+todo
    document.getElementById('CA').value=parseInt(-10+mlv+des+bca1+bca2+bca3+caou)
    document.getElementById('CAdestreza').value=parseInt(des)
};
function fp() {//Função para calcular perícias. Ativada o marcar qualquer perícia 
    var FOR=parseInt(document.getElementById('MFOR').value);
    var DES=parseInt(document.getElementById('MDES').value);
    var CON=parseInt(document.getElementById('MCON').value);
    var INT=parseInt(document.getElementById('MINT').value);
    var SAB=parseInt(document.getElementById('MSAB').value);
    var CAR=parseInt(document.getElementById('MCAR').value);
    
    var acrobacia=document.getElementById('Acrobacia');
    var adsanimal=document.getElementById('AdestrarAnimais');
    var atletismo=document.getElementById('Atletismo');
    var atuacao=document.getElementById('Atuacao');
    var atuacao2=document.getElementById('Atuacao2');
    var cavalgar=document.getElementById('Cavalgar');
    var conhecimento=document.getElementById('Conhecimento');
    var conhecimento2=document.getElementById('Conhecimento2');
    var cura=document.getElementById('cura');
    var diplomacia=document.getElementById('Diplomacia');
    var enganacao=document.getElementById('Enganacao');
    var furtividade=document.getElementById('Furtividade');
    var idmagia=document.getElementById('Magia');
    var iniciativa=document.getElementById('Iniciativa');
    var intimidacao=document.getElementById('Intimidacao');
    var intuicao=document.getElementById('Intuicao');
    var ladinagem=document.getElementById('Ladinagem');
    var obtinfo=document.getElementById('ObtInfo');
    var oficio=document.getElementById('Oficio');
    var oficio2=document.getElementById('Oficio2');
    var percepcao=document.getElementById('Percepcao');
    var sobrevivencia=document.getElementById('Sobrevivencia');

    var acrobaciaOu=document.getElementById('AcrobaciaOu');
    var adsanimalOu=document.getElementById('AdestrarAnimaisOu');
    var atletismoOu=document.getElementById('AtletismoOu');
    var atuacaoOu=document.getElementById('AtuacaoOu');
    var atuacao2Ou=document.getElementById('Atuacao2Ou');
    var cavalgarOu=document.getElementById('CavalgarOu');
    var conhecimentoOu=document.getElementById('ConhecimentoOu');
    var conhecimento2Ou=document.getElementById('Conhecimento2Ou');
    var curaOu=document.getElementById('CuraOu');
    var diplomaciaOu=document.getElementById('DiplomaciaOu');
    var enganacaoOu=document.getElementById('EnganacaoOu');
    var furtividadeOu=document.getElementById('FurtividadeOu');
    var idmagiaOu=document.getElementById('IdMagicOu');
    var iniciativaOu=document.getElementById('IniciativaOu');
    var intimidacaoOu=document.getElementById('IntimidacaoOu');
    var intuicaoOu=document.getElementById('IntuicaoOu');
    var ladinagemOu=document.getElementById('LadinagemOu');
    var obtinfoOu=document.getElementById('ObtInfoOu');
    var oficioOu=document.getElementById('OficioOu');
    var oficio2Ou=document.getElementById('Oficio2Ou');
    var percepcaoOu=document.getElementById('PercepcaoOu');
    var sobrevivenciaOu=document.getElementById('SobrevivenciaOu');

    var lv=parseInt (document.getElementById('nivel').value);
    
    var gradt=lv+3;
    var grado=parseInt (lv/2);

    if (acrobacia.checked ==true) {
        document.getElementById('AcrobaciaTotal').value=parseInt (gradt+DES+acrobaciaOu)
        document.getElementById('AcrobaciaGrad').value=gradt
        document.getElementById('AcrobaciaMod').value=DES
    } else{
        document.getElementById('AcrobaciaTotal').value=parseInt (grado+DES+acrobaciaOu)
        document.getElementById('AcrobaciaGrad').value=grado
        document.getElementById('AcrobaciaMod').value=DES
    }
    if (adsanimal.checked ==true) {
        document.getElementById('AdestrarTotal').value=parseInt (gradt+CAR+adsanimalOu)
        document.getElementById('AdestrarGrad').value=gradt
        document.getElementById('AdestrarMod').value=CAR
    } else {
        document.getElementById('AdestrarTotal').value=parseInt (grado+CAR+adsanimalOu)
        document.getElementById('AdestrarGrad').value=grado
        document.getElementById('AdestrarMod').value=CAR
    }
    if (atletismo.checked ==true) {
        document.getElementById('AtletismoTotal').value=parseInt (gradt+FOR+atletismoOu)
        document.getElementById('AtletismoGrad').value=gradt
        document.getElementById('AtletismoMod').value=FOR
    } else {
        document.getElementById('AtletismoTotal').value=parseInt (grado+FOR+atletismoOu)
        document.getElementById('AtletismoGrad').value=grado
        document.getElementById('AtletismoMod').value=FOR
    }
    if (atuacao.checked ==true) {
        document.getElementById('AtuacaoTotal').value=parseInt (gradt+CAR+atuacaoOu)
        document.getElementById('AtuacaoGrad').value=gradt
        document.getElementById('AtuacaoMod').value=CAR
    } else {
        document.getElementById('AtuacaoTotal').value=parseInt (grado+CAR+atuacaoOu)
        document.getElementById('AtuacaoGrad').value=grado
        document.getElementById('AtuacaoMod').value=CAR
    }
    if (atuacao2.checked ==true) {
        document.getElementById('Atuacao2Total').value=parseInt (gradt+CAR+atuacao2Ou)
        document.getElementById('Atuacao2Grad').value=gradt
        document.getElementById('Atuacao2Mod').value=CAR
    } else {
        document.getElementById('Atuacao2Total').value=parseInt (grado+CAR+atuacao2Ou)
        document.getElementById('Atuacao2Grad').value=grado
        document.getElementById('Atuacao2Mod').value=CAR
    }
    if (cavalgar.checked ==true) {
        document.getElementById('CavalgarTotal').value=parseInt (gradt+DES+cavalgarOu)
        document.getElementById('CavalgarGrad').value=gradt
        document.getElementById('CavalgarMod').value=DES
    } else {
        document.getElementById('CavalgarTotal').value=parseInt (grado+DES+cavalgarOu)
        document.getElementById('CavalgarGrad').value=grado
        document.getElementById('CavalgarMod').value=DES
    }
    if (conhecimento.checked ==true) {
        document.getElementById('ConhecimentoTotal').value=parseInt (gradt+INT+conhecimento2Ou)
        document.getElementById('ConhecimentoGrad').value=gradt
        document.getElementById('ConhecimentoMod').value=INT
    } else {
        document.getElementById('ConhecimentoTotal').value=parseInt (grado+INT+conhecimento2Ou)
        document.getElementById('ConhecimentoGrad').value=grado
        document.getElementById('ConhecimentoMod').value=INT
    }
    if (conhecimento2.checked ==true) {
        document.getElementById('Conhecimento2Total').value=parseInt (gradt+INT+conhecimento2Ou)
        document.getElementById('Conhecimento2Grad').value=gradt
        document.getElementById('Conhecimento2Mod').value=INT
    } else {
        document.getElementById('Conhecimento2Total').value=parseInt (grado+INT+conhecimento2Ou)
        document.getElementById('Conhecimento2Grad').value=grado
        document.getElementById('Conhecimento2Mod').value=INT
    }
    if (cura.checked ==true) {
        document.getElementById('curaTotal').value=parseInt (gradt+SAB+curaOu)
        document.getElementById('curaGrad').value=gradt
        document.getElementById('curaMod').value=SAB
    } else {
        document.getElementById('curaTotal').value=parseInt (grado+SAB+curaOu)
        document.getElementById('curaGrad').value=grado
        document.getElementById('curaMod').value=SAB
    }
    if (diplomacia.checked ==true) {
        document.getElementById('DiplomaciaTotal').value=parseInt (gradt+CAR+diplomaciaOu)
        document.getElementById('DiplomaciaGrad').value=gradt
        document.getElementById('DiplomaciaMod').value=CAR
    } else {
        document.getElementById('DiplomaciaTotal').value=parseInt (grado+CAR+diplomaciaOu)
        document.getElementById('DiplomaciaGrad').value=grado
        document.getElementById('DiplomaciaMod').value=CAR
    }
    if (enganacao.checked ==true) {
        document.getElementById('EnganacaoTotal').value=parseInt (gradt+CAR+enganacaoOu)
        document.getElementById('EnganacaoGrad').value=gradt
        document.getElementById('EnganacaoMod').value=CAR
    } else {
        document.getElementById('EnganacaoTotal').value=parseInt (grado+CAR+enganacaoOu)
        document.getElementById('EnganacaoGrad').value=grado
        document.getElementById('EnganacaoMod').value=CAR
    }
    if (furtividade.checked ==true) {
        document.getElementById('FurtividadeTotal').value=parseInt (gradt+DES+furtividadeOu)
        document.getElementById('FurtividadeGrad').value=gradt
        document.getElementById('FurtividadeMod').value=DES
    } else {
        document.getElementById('FurtividadeTotal').value=parseInt (grado+DES+furtividadeOu)
        document.getElementById('FurtividadeGrad').value=grado
        document.getElementById('FurtividadeMod').value=DES
    }
    if (idmagia.checked ==true) {
        document.getElementById('IdMagicTotal').value=parseInt (gradt+INT+idmagiaOu)
        document.getElementById('IdMagicGrad').value=gradt
        document.getElementById('IdMagicMod').value=INT
    } else {
        document.getElementById('IdMagicTotal').value=parseInt (grado+INT+idmagiaOu)
        document.getElementById('IdMagicGrad').value=grado
        document.getElementById('IdMagicMod').value=INT
    }
    if (iniciativa.checked ==true) {
        document.getElementById('IniciativaTotal').value=parseInt (gradt+DES+iniciativaOu)
        document.getElementById('IniciativaGrad').value=gradt
        document.getElementById('IniciativaMod').value=DES
    } else {
        document.getElementById('IniciativaTotal').value=parseInt (grado+DES+iniciativaOu)
        document.getElementById('IniciativaGrad').value=grado
        document.getElementById('IniciativaMod').value=DES
    }
    if (intimidacao.checked ==true) {
        document.getElementById('IntimidacaoTotal').value=parseInt (gradt+CAR+intimidacaoOu)
        document.getElementById('IntimidacaoGrad').value=gradt
        document.getElementById('IntimidacaoMod').value=CAR
    } else {
        document.getElementById('IntimidacaoTotal').value=parseInt (grado+CAR+intimidacaoOu)
        document.getElementById('IntimidacaoGrad').value=grado
        document.getElementById('IntimidacaoMod').value=CAR
    }
    if (intuicao.checked ==true) {
        document.getElementById('IntuicaoTotal').value=parseInt (gradt+SAB+intuicaoOu)
        document.getElementById('IntuicaoGrad').value=gradt
        document.getElementById('IntuicaoMod').value=SAB
    } else {
        document.getElementById('IntuicaoTotal').value=parseInt (grado+SAB+intuicaoOu)
        document.getElementById('IntuicaoGrad').value=grado
        document.getElementById('IntuicaoMod').value=SAB
    }
    if (ladinagem.checked ==true) {
        document.getElementById('LadinagemTotal').value=parseInt (gradt+DES+ladinagemOu)
        document.getElementById('LadinagemGrad').value=gradt
        document.getElementById('LadinagemMod').value=DES
    } else {
        document.getElementById('LadinagemTotal').value=parseInt (grado+DES+ladinagemOu)
        document.getElementById('LadinagemGrad').value=grado
        document.getElementById('LadinagemMod').value=DES
    }
    if (obtinfo.checked ==true) {
        document.getElementById('ObtInfoTotal').value=parseInt (gradt+CAR+obtinfoOu)
        document.getElementById('ObtInfoGrad').value=gradt
        document.getElementById('ObtInfoMod').value=CAR
    } else {
        document.getElementById('ObtInfoTotal').value=parseInt (grado+CAR+obtinfoOu)
        document.getElementById('ObtInfoGrad').value=grado
        document.getElementById('ObtInfoMod').value=CAR
    }
    if (oficio.checked ==true) {
        document.getElementById('OficioTotal').value=parseInt (gradt+INT+oficioOu)
        document.getElementById('OficioGrad').value=gradt
        document.getElementById('OficioMod').value=INT
    } else {
        document.getElementById('OficioTotal').value=parseInt (grado+INT+oficioOu)
        document.getElementById('OficioGrad').value=grado
        document.getElementById('OficioMod').value=INT
    }
    if (oficio2.checked ==true) {
        document.getElementById('Oficio2Total').value=parseInt (gradt+INT+oficio2Ou)
        document.getElementById('Oficio2Grad').value=gradt
        document.getElementById('Oficio2Mod').value=INT
    } else {
        document.getElementById('Oficio2Total').value=parseInt (grado+INT+oficio2Ou)
        document.getElementById('Oficio2Grad').value=grado
        document.getElementById('Oficio2Mod').value=INT
    }
    if (percepcao.checked ==true) {
        document.getElementById('PercepcaoTotal').value=parseInt (gradt+SAB+percepcaoOu)
        document.getElementById('PercepcaoGrad').value=gradt
        document.getElementById('PercepcaoMod').value=SAB
    } else {
        document.getElementById('PercepcaoTotal').value=parseInt (grado+SAB+percepcaoOu)
        document.getElementById('PercepcaoGrad').value=grado
        document.getElementById('PercepcaoMod').value=SAB
    }
    if (sobrevivencia.checked ==true) {
        document.getElementById('SobrevivenciaTotal').value=parseInt (gradt+SAB+sobrevivenciaOu)
        document.getElementById('SobrevivenciaGrad').value=gradt
        document.getElementById('SobrevivenciaMod').value=SAB
    } else {
        document.getElementById('SobrevivenciaTotal').value=parseInt (grado+SAB+sobrevivenciaOu)
        document.getElementById('SobrevivenciaGrad').value=grado
        document.getElementById('SobrevivenciaMod').value=SAB
    }

};