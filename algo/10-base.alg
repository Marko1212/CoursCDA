<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_POUR" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#TABLEAU" algoitem="TABLEAU EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#TABLEAU#10#0" algoitem="TABLEAU[0] PREND_LA_VALEUR 10"/>
        <item code="5#TABLEAU#16#1" algoitem="TABLEAU[1] PREND_LA_VALEUR 16"/>
        <item code="5#TABLEAU#18#2" algoitem="TABLEAU[2] PREND_LA_VALEUR 18"/>
        <item code="5#TABLEAU#20#3" algoitem="TABLEAU[3] PREND_LA_VALEUR 20"/>
        <item code="12#I#0#3" algoitem="POUR I ALLANT_DE 0 A 3">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#TABLEAU#1#I" algoitem="AFFICHER TABLEAU[I]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
