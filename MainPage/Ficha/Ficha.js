function atualizar_status(forca,destreza,constituicao,inteligencia,sabedoria,carisma,deslocamento,altura,HabRaca){
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

function f1(){
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
			
			
function f2(){
    var classe=document.getElementById('classe').value;
    
    var FOR=document.getElementById('MFOR').value;
    var DES=document.getElementById('MDES').value;
    var CON=document.getElementById('MCON').value;
    var INT=document.getElementById('MINT').value;
    var SAB=document.getElementById('MSAB').value;
    var CAR=document.getElementById('MCAR').value;
    
    var acrobacia=document.getElementById('Acrobacia');
    var adsanimal=document.getElementById('AdestrarAnimais');
    var atletismo=document.getElementById('Atletismo');
    var atuacao=document.getElementById('Atuacao');
    var atuacao2=document.getElementById('Atuacao');
    var cavalgar=document.getElementById('Cavalgar');
    var conhecimento=document.getElementById('Conhecimento');
    var conhecimento2=document.getElementById('Conhecimento');
    var cura=document.getElementById('Cura');
    var diplomacia=document.getElementById('Diplomacia');
    var enganacao=document.getElementById('Enganacao');
    var furtividade=document.getElementById('Furtividade');
    var idmagia=document.getElementById('IdMagic');
    var iniciativa=document.getElementById('Iniciativa');
    var intimidacao=document.getElementById('Intimidacao');
    var intuicao=document.getElementById('Intuicao');
    var ladinagem=document.getElementById('Ladinagem');
    var obtinfo=document.getElementById('ObtInfo');
    var oficio=document.getElementById('Oficio');
    var oficio2=document.getElementById('Oficio');
    var percepcao=document.getElementById('Percepcao');
    var sobrevivencia=document.getElementById('Sobrevivencia');

    var lv=document.getElementById('nivel').value;
    
    var gradt=parseInt (lv+3);
    var grado=parseInt (lv/2);
    
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
        document.getElementById('IdMagic').style.color = "#00FF00";
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
        document.getElementById('Cura').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('IdMagic').style.color = "#00FF00";
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
        document.getElementById('Cura').style.color = "#00FF00";
        document.getElementById('Diplomacia').style.color = "#00FF00";
        document.getElementById('IdMagic').style.color = "#00FF00";
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
        document.getElementById('IdMagic').style.color = "#00FF00";
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
        document.getElementById('IdMagic').style.color = "#00FF00";
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
        document.getElementById('Cura').style.color = "#00FF00";
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
        document.getElementById('Cura').style.color = "#00FF00";
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
        document.getElementById('Cura').style.color = "#00FF00";
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
    //===============================================
    if (acrobacia.checked ==true) {
        document.getElementById('AcrobaciaTotal').value=gradt+DES
        document.getElementById('AcrobaciaGrad').value=gradt
        document.getElementById('AcrobaciaMod').value=DES
    } else{
        document.getElementById('AcrobaciaTotal').value=grado+DES
        document.getElementById('AcrobaciaGrad').value=grado
        document.getElementById('AcrobaciaMod').value=DES
    }
    if (adsanimal.checked ==true) {
        document.getElementById('AdestrarTotal').value=(gradt+CAR)
        document.getElementById('AdestrarGrad').value=grado
        document.getElementById('AdestrarMod').value=CAR
    } else {
        document.getElementById('AdestrarTotal').value=(grado+CAR)
        document.getElementById('AdestrarGrad').value=grado
        document.getElementById('AdestrarMod').value=CAR
    }
    if (atletismo.checked ==true) {
        document.getElementById('AtletismoTotal').value=(gradt+FOR)
        document.getElementById('AtletismoGrad').value=grado
        document.getElementById('AtletismoMod').value=FOR
    } else {
        document.getElementById('AtletismoTotal').value=(grado+FOR)
        document.getElementById('AtletismoGrad').value=grado
        document.getElementById('AtletismoMod').value=FOR
    }
    if (atuacao.checked ==true) {
        document.getElementById('AtuacaoTotal').value=(gradt+CAR)
        document.getElementById('AtuacaoGrad').value=grado
        document.getElementById('AtuacaoMod').value=CAR
    } else {
        document.getElementById('AtuacaoTotal').value=(grado+CAR)
        document.getElementById('AtuacaoGrad').value=grado
        document.getElementById('AtuacaoMod').value=CAR
    }
    if (atuacao2.checked ==true) {
        document.getElementById('AtuacaoTotal').value=(gradt+CAR)
        document.getElementById('AtuacaoGrad').value=grado
        document.getElementById('AtuacaoMod').value=CAR
    } else {
        document.getElementById('AtuacaoTotal').value=(grado+CAR)
        document.getElementById('AtuacaoGrad').value=grado
        document.getElementById('AtuacaoMod').value=CAR
    }
    if (cavalgar.checked ==true) {
        document.getElementById('CavalgarTotal').value=(gradt+DES)
        document.getElementById('CavalgarGrad').value=grado
        document.getElementById('CavalgarMod').value=DES
    } else {
        document.getElementById('CavalgarTotal').value=(grado+DES)
        document.getElementById('CavalgarGrad').value=grado
        document.getElementById('CavalgarMod').value=DES
    }
    if (conhecimento.checked ==true) {
        document.getElementById('ConhecimentoTotal').value=(gradt+INT)
        document.getElementById('ConhecimentoGrad').value=grado
        document.getElementById('ConhecimentoMod').value=INT
    } else {
        document.getElementById('ConhecimentoTotal').value=(grado+INT)
        document.getElementById('ConhecimentoGrad').value=grado
        document.getElementById('ConhecimentoMod').value=INT
    }
    if (conhecimento2.checked ==true) {
        document.getElementById('ConhecimentoTotal').value=(gradt+INT)
        document.getElementById('ConhecimentoGrad').value=grado
        document.getElementById('ConhecimentoMod').value=INT
    } else {
        document.getElementById('ConhecimentoTotal').value=(grado+INT)
        document.getElementById('ConhecimentoGrad').value=grado
        document.getElementById('ConhecimentoMod').value=INT
    }
    if (cura.checked ==true) {
        document.getElementById('curaTotal').value=(gradt+SAB)
        document.getElementById('curaGrad').value=grado
        document.getElementById('curaMod').value=SAB
    } else {
        document.getElementById('curaTotal').value=(grado+SAB)
        document.getElementById('curaGrad').value=grado
        document.getElementById('curaMod').value=SAB
    }
    if (diplomacia.checked ==true) {
        document.getElementById('DiplomaciaTotal').value=(gradt+CAR)
        document.getElementById('DiplomaciaGrad').value=grado
        document.getElementById('DiplomaciaMod').value=CAR
    } else {
        document.getElementById('DiplomaciaTotal').value=(grado+CAR)
        document.getElementById('DiplomaciaGrad').value=grado
        document.getElementById('DiplomaciaMod').value=CAR
    }
    if (enganacao.checked ==true) {
        document.getElementById('EnganacaoTotal').value=(gradt+CAR)
        document.getElementById('EnganacaoGrad').value=grado
        document.getElementById('EnganacaoMod').value=CAR
    } else {
        document.getElementById('EnganacaoTotal').value=(grado+CAR)
        document.getElementById('EnganacaoGrad').value=grado
        document.getElementById('EnganacaoMod').value=CAR
    }
    if (furtividade.checked ==true) {
        document.getElementById('FurtividadeTotal').value=(gradt+DES)
        document.getElementById('FurtividadeGrad').value=grado
        document.getElementById('FurtividadeMod').value=DES
    } else {
        document.getElementById('FurtividadeTotal').value=(grado+DES)
        document.getElementById('FurtividadeGrad').value=grado
        document.getElementById('FurtividadeMod').value=DES
    }
    if (idmagia.checked ==true) {
        document.getElementById('IdMagicTotal').value=(gradt+INT)
        document.getElementById('IdMagicGrad').value=grado
        document.getElementById('IdMagicMod').value=INT
    } else {
        document.getElementById('IdMagicTotal').value=(grado+INT)
        document.getElementById('IdMagicGrad').value=grado
        document.getElementById('IdMagicMod').value=INT
    }
    if (iniciativa.checked ==true) {
        document.getElementById('IniciativaTotal').value=(gradt+DES)
        document.getElementById('IniciativaGrad').value=grado
        document.getElementById('IniciativaMod').value=DES
    } else {
        document.getElementById('IniciativaTotal').value=(grado+DES)
        document.getElementById('IniciativaGrad').value=grado
        document.getElementById('IniciativaMod').value=DES
    }
    if (intimidacao.checked ==true) {
        document.getElementById('IntimidacaoTotal').value=(gradt+CAR)
        document.getElementById('IntimidacaoGrad').value=grado
        document.getElementById('IntimidacaoMod').value=CAR
    } else {
        document.getElementById('IntimidacaoTotal').value=(grado+CAR)
        document.getElementById('IntimidacaoGrad').value=grado
        document.getElementById('IntimidacaoMod').value=CAR
    }
    if (intuicao.checked ==true) {
        document.getElementById('IntuicaoTotal').value=(gradt+SAB)
        document.getElementById('IntuicaoGrad').value=grado
        document.getElementById('IntuicaoMod').value=SAB
    } else {
        document.getElementById('IntuicaoTotal').value=(grado+SAB)
        document.getElementById('IntuicaoGrad').value=grado
        document.getElementById('IntuicaoMod').value=SAB
    }
    if (ladinagem.checked ==true) {
        document.getElementById('LadinagemTotal').value=(gradt+DES)
        document.getElementById('LadinagemGrad').value=grado
        document.getElementById('LadinagemMod').value=DES
    } else {
        document.getElementById('LadinagemTotal').value=(grado+DES)
        document.getElementById('LadinagemGrad').value=grado
        document.getElementById('LadinagemMod').value=DES
    }
    if (obtinfo.checked ==true) {
        document.getElementById('ObtInfoTotal').value=(gradt+CAR)
        document.getElementById('ObtInfoGrad').value=grado
        document.getElementById('ObtInfoMod').value=CAR
    } else {
        document.getElementById('ObtInfoTotal').value=(grado+CAR)
        document.getElementById('ObtInfoGrad').value=grado
        document.getElementById('ObtInfoMod').value=CAR
    }
    if (oficio.checked ==true) {
        document.getElementById('OficioTotal').value=(gradt+INT)
        document.getElementById('OficioGrad').value=grado
        document.getElementById('OficioMod').value=INT
    } else {
        document.getElementById('OficioTotal').value=(grado+INT)
        document.getElementById('OficioGrad').value=grado
        document.getElementById('OficioMod').value=INT
    }
    if (oficio2.checked ==true) {
        document.getElementById('OficioTotal').value=(gradt+INT)
        document.getElementById('OficioGrad').value=grado
        document.getElementById('OficioMod').value=INT
    } else {
        document.getElementById('OficioTotal').value=(grado+INT)
        document.getElementById('OficioGrad').value=grado
        document.getElementById('OficioMod').value=INT
    }
    if (percepcao.checked ==true) {
        document.getElementById('PercepcaoTotal').value=(gradt+SAB)
        document.getElementById('PercepcaoGrad').value=grado
        document.getElementById('PercepcaoMod').value=SAB
    } else {
        document.getElementById('PercepcaoTotal').value=(grado+SAB)
        document.getElementById('PercepcaoGrad').value=grado
        document.getElementById('PercepcaoMod').value=SAB
    }
    if (sobrevivencia.checked ==true) {
        document.getElementById('SobrevivenciaTotal').value=(gradt+SAB)
        document.getElementById('SobrevivenciaGrad').value=grado
        document.getElementById('SobrevivenciaMod').value=SAB
    } else {
        document.getElementById('SobrevivenciaTotal').value=(grado+SAB)
        document.getElementById('SobrevivenciaGrad').value=grado
        document.getElementById('SobrevivenciaMod').value=SAB
    }
    //=================================================
    var lv=document.getElementById('nivel')
    var resto=parseInt (lv%2);
    var cont=parseInt (0); 
    for (var i = 1; i < lv; i++) {
        if (resto!=0) {
            cont+=1;
        }
    }
    document.getElementById('contTalentos').value=cont  
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
function f4(){
    var lv =document.getElementById('nivel').value;
    var forca =document.getElementById('MCON').value;
    var des =document.getElementById('MDES').value;
    var sab =document.getElementById('MSAB').value;
    var fou =document.getElementById('RFOROU').value;
    var rou =document.getElementById('RREFOU').value;
    var vou =document.getElementById('RVONOU').value;
    var mlv =parseInt (lv/2);
    document.getElementById('RFORT').value=mlv+forca+fou
    document.getElementById('RFORT').value=mlv+des+rou
    document.getElementById('RFORT').value=mlv+sab+vou
};
function f5(){
    var lv =document.getElementById('nivel').value;
    var mlv =parseInt (lv/2);
    var des =document.getElementById('MDES').value;
    var bca1 =document.getElementById('BonusCA1').value;
    var bca2 =document.getElementById('BonusCA2').value;
    var bca3 =document.getElementById('BonusCA3').value;
    //ca-10+todo
    document.getElementById('CAtotal').value=-10+mlv+des+bca1+bca2+bca3    
};