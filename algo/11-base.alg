<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHERCALCUL SOMME/4"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurLigne="2" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" nbDecimales="8" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#TABLEAU" algoitem="TABLEAU EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#SOMME" algoitem="SOMME EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#TABLEAU#10#0" algoitem="TABLEAU[0] PREND_LA_VALEUR 10"/>
        <item code="5#TABLEAU#16#1" algoitem="TABLEAU[1] PREND_LA_VALEUR 16"/>
        <item code="5#TABLEAU#18#2" algoitem="TABLEAU[2] PREND_LA_VALEUR 18"/>
        <item code="5#TABLEAU#20#3" algoitem="TABLEAU[3] PREND_LA_VALEUR 20"/>
        <item code="5#SOMME#0#pasliste" algoitem="SOMME PREND_LA_VALEUR 0"/>
        <item code="12#I#0#3" algoitem="POUR I ALLANT_DE 0 A 3">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#SOMME#SOMME + TABLEAU[I]#pasliste" algoitem="SOMME PREND_LA_VALEUR SOMME + TABLEAU[I]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#La moyenne des notes est #0" algoitem="AFFICHER &quot;La moyenne des notes est &quot;"/>
        <item code="20#SOMME/4#0" algoitem="AFFICHERCALCUL SOMME/4"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
