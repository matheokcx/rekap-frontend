import LegalLayout from '@/components/UI/Legal/LegalLayout.tsx';
import LegalNote from '@/components/UI/Legal/LegalNote.tsx';

const CgvPage = () => {
    return (
        <LegalLayout title="Conditions générales de vente (CGV)" lastUpdated="20 juin 2026">
            <LegalNote>
                Rekap est un service destiné aux professionnels (agences, studios, indépendants
                agissant pour leurs besoins professionnels). Les présentes CGV s'appliquent à des
                relations entre professionnels (B2B) ; les dispositions protectrices du Code de la
                consommation réservées aux consommateurs ne s'appliquent pas.
            </LegalNote>

            <h2>1. Objet</h2>
            <p>
                Les présentes conditions générales de vente (« CGV ») régissent la souscription et
                l'utilisation du service Rekap (le « Service ») édité par [Company-name], [Address].
                Elles s'appliquent à toute commande d'un abonnement payant et prévalent sur tout
                autre document du Client, sauf accord écrit contraire.
            </p>

            <h2>2. Description du Service</h2>
            <p>
                Rekap est une application en ligne (SaaS) qui se connecte à vos outils de gestion de
                projet (Asana, puis ClickUp et monday.com) et génère, à l'aide de l'intelligence
                artificielle, des comptes rendus d'activité (« updates ») destinés à vos clients. Le
                Service fonctionne selon un principe de validation humaine : les updates sont
                rédigés automatiquement, puis relus, modifiés et envoyés par le Client.
            </p>

            <h2>3. Souscription et compte</h2>
            <p>
                La souscription suppose la création d'un compte et l'acceptation des présentes CGV
                ainsi que des <a href="/cgu">Conditions générales d'utilisation</a>. Le Client
                garantit l'exactitude des informations fournies et est responsable de la
                confidentialité de ses identifiants.
            </p>

            <h2>4. Offres et tarifs</h2>
            <p>
                Le Service est proposé selon plusieurs formules, dont les caractéristiques et prix
                sont indiqués sur le site au moment de la commande :
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Formule</th>
                        <th>Prix</th>
                        <th>Principales limites</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Free</td>
                        <td>0 € / mois</td>
                        <td>1 client, rédaction et envoi manuels (sans génération IA)</td>
                    </tr>
                    <tr>
                        <td>Starter</td>
                        <td>10 € / mois</td>
                        <td>Jusqu'à 3 clients, génération IA, envoi programmé</td>
                    </tr>
                    <tr>
                        <td>Pro</td>
                        <td>25 € / mois</td>
                        <td>Jusqu'à 15 clients, multi-utilisateurs</td>
                    </tr>
                    <tr>
                        <td>Agency</td>
                        <td>100 € / mois</td>
                        <td>Clients illimités, rôles et permissions, support prioritaire</td>
                    </tr>
                </tbody>
            </table>
            <p>
                Les prix sont indiqués hors taxes (HT) ; la TVA applicable est ajoutée le cas
                échéant selon la réglementation en vigueur. Rekap se réserve le droit de modifier
                ses tarifs ; toute évolution est notifiée au Client et s'applique à la période
                d'abonnement suivante. Les tarifs « founding members » sont susceptibles d'évoluer à
                l'issue de la phase pilote.
            </p>

            <h2>5. Modalités de paiement</h2>
            <p>
                Le paiement des abonnements s'effectue par carte bancaire via notre prestataire de
                paiement sécurisé [À COMPLÉTER — ex. Stripe]. L'abonnement est facturé d'avance,
                selon la périodicité choisie (mensuelle). Le Client autorise le prélèvement
                automatique à chaque échéance.
            </p>
            <p>
                En cas de défaut de paiement, Rekap peut suspendre l'accès au Service après
                information du Client, sans préjudice des pénalités de retard exigibles entre
                professionnels au taux prévu par l'article L. 441-10 du Code de commerce, majorées
                de l'indemnité forfaitaire de 40 € pour frais de recouvrement.
            </p>

            <h2>6. Durée, reconduction et résiliation</h2>
            <p>
                L'abonnement est conclu pour la période choisie et se renouvelle automatiquement par
                tacite reconduction pour des périodes successives de même durée. Le Client peut
                résilier à tout moment depuis son espace ou par e-mail à support@rekap.tech ; la
                résiliation prend effet à la fin de la période d'abonnement en cours. Les sommes
                déjà réglées au titre de la période en cours ne sont pas remboursées, sauf
                disposition légale impérative contraire.
            </p>

            <h2>7. Droit de rétractation</h2>
            <p>
                Le Service étant souscrit par des professionnels pour les besoins de leur activité,
                le droit de rétractation prévu par le Code de la consommation ne s'applique pas, le
                Client reconnaissant agir à titre professionnel.
            </p>

            <h2>8. Disponibilité et niveau de service</h2>
            <p>
                Rekap met en œuvre ses meilleurs efforts pour assurer la disponibilité du Service
                24h/24, hors opérations de maintenance et cas de force majeure. Le Service est
                fourni sous une obligation de moyens. Rekap ne garantit pas que le Service sera
                exempt d'interruption ou d'erreur, ni l'exactitude des contenus générés par l'IA,
                qui doivent être relus et validés par le Client avant tout envoi.
            </p>

            <h2>9. Responsabilité</h2>
            <p>
                Le Client demeure seul responsable des updates qu'il relit, valide et envoie à ses
                propres clients. Rekap ne saurait être tenu responsable du contenu envoyé par le
                Client ni des conséquences de cet envoi. En tout état de cause, et dans la limite
                autorisée par la loi, la responsabilité de Rekap au titre des présentes est limitée
                aux dommages directs et plafonnée au montant total des sommes versées par le Client
                au cours des douze (12) mois précédant le fait générateur.
            </p>

            <h2>10. Données personnelles et confidentialité</h2>
            <p>
                Le traitement des données personnelles est décrit dans la{' '}
                <a href="/politique-de-confidentialite">Politique de confidentialité</a>. Pour les
                données des clients finaux du Client traitées via les outils connectés, Rekap agit
                en qualité de sous-traitant au sens de l'article 28 du RGPD ; un accord de
                sous-traitance (DPA) est disponible sur demande. Chaque partie s'engage à préserver
                la confidentialité des informations échangées.
            </p>

            <h2>11. Propriété intellectuelle</h2>
            <p>
                Rekap concède au Client un droit d'usage personnel, non exclusif et non cessible du
                Service pendant la durée de l'abonnement. Le Client conserve la propriété de ses
                contenus et des données qu'il importe. Rekap conserve l'ensemble des droits de
                propriété intellectuelle sur le Service.
            </p>

            <h2>12. Modification des CGV</h2>
            <p>
                Rekap peut modifier les présentes CGV. Les nouvelles conditions sont notifiées au
                Client et s'appliquent à compter de la période d'abonnement suivante. Le maintien de
                l'abonnement vaut acceptation.
            </p>

            <h2>13. Droit applicable et juridiction</h2>
            <p>
                Les présentes CGV sont soumises au droit français. À défaut de résolution amiable,
                tout litige relatif à leur validité, leur interprétation ou leur exécution relève de
                la compétence exclusive des tribunaux du ressort du siège social de Rekap, sous
                réserve des règles impératives applicables.
            </p>

            <h2>14. Contact</h2>
            <p>Pour toute question relative aux présentes CGV : support@rekap.tech .</p>
        </LegalLayout>
    );
};

export default CgvPage;
