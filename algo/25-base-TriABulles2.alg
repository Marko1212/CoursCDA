<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_POUR"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8" epaisseurLigne="2" maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#NOMBRES" algoitem="NOMBRES EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#TEMP" algoitem="TEMP EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#NOMBRES#4:25:1:36:24#0" algoitem="NOMBRES[0] PREND_LA_VALEUR 4:25:1:36:24"/>
        <item code="5#I#0#pasliste" algoitem="I PREND_LA_VALEUR 0"/>
        <item code="15#I &lt; 5" algoitem="TANT_QUE (I &lt; 5) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="6#NOMBRES[I] > NOMBRES[I+1]" algoitem="SI (NOMBRES[I] > NOMBRES[I+1]) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#TEMP#NOMBRES[I]#pasliste" algoitem="TEMP PREND_LA_VALEUR NOMBRES[I]"/>
                <item code="5#NOMBRES#NOMBRES[I+1]#I" algoitem="NOMBRES[I] PREND_LA_VALEUR NOMBRES[I+1]"/>
                <item code="5#NOMBRES#TEMP#I+1" algoitem="NOMBRES[I+1] PREND_LA_VALEUR TEMP"/>
                <item code="5#I#0#pasliste" algoitem="I PREND_LA_VALEUR 0"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="5#I#I + 1#pasliste" algoitem="I PREND_LA_VALEUR I + 1"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="12#I#0#4" algoitem="POUR I ALLANT_DE 0 A 4">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#NOMBRES#1#I" algoitem="AFFICHER NOMBRES[I]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
