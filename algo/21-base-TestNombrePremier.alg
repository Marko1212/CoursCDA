<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_SINON"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" totalAffichages="1000" epaisseurLigne="2" epaisseurPoint="2" totalBoucles="5000000" maxBoucle="500000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="N EST_DU_TYPE NOMBRE" code="1#NOMBRE#N"/>
        <item algoitem="I EST_DU_TYPE NOMBRE" code="1#NOMBRE#I"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez un nombre entier positif&quot;" code="4#Entrez un nombre entier positif#1"/>
        <item algoitem="LIRE N" code="2#N#pasliste"/>
        <item algoitem="SI (N == 1) ALORS" code="6#N == 1">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Le nombre n'est pas premier&quot;" code="4#Le nombre n'est pas premier#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (N % 2 == 0) ALORS" code="6#N % 2 == 0">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="SI (N==2) ALORS" code="6#N==2">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;Le nombre est premier&quot;" code="4#Le nombre est premier#0"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                        <item algoitem="SINON" code="9#sinon">
                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                            <item algoitem="AFFICHER &quot;Le nombre n'est pas premier&quot;" code="4#Le nombre n'est pas premier#0"/>
                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                        </item>
                    </item>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="I PREND_LA_VALEUR 3" code="5#I#3#pasliste"/>
                        <item algoitem="TANT_QUE (I*I &lt;= N) FAIRE" code="15#I*I &lt;= N">
                            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                            <item algoitem="SI (N%I == 0) ALORS" code="6#N%I == 0">
                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                <item algoitem="AFFICHER &quot;Le nombre n'est pas premier&quot;" code="4#Le nombre n'est pas premier#0"/>
                                <item algoitem="PAUSE" code="18#pause"/>
                                <item algoitem="FIN_SI" code="8#finsi"/>
                            </item>
                            <item algoitem="I PREND_LA_VALEUR I + 2" code="5#I#I + 2#pasliste"/>
                            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
                        </item>
                        <item algoitem="AFFICHER &quot;Le nombre est premier&quot;" code="4#Le nombre est premier#0"/>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
