import LegalLayout from '@/components/UI/Legal/LegalLayout.tsx';
import LegalNote from '@/components/UI/Legal/LegalNote.tsx';

const CguPage = () => {
    return (
        <LegalLayout title="Conditions générales d'utilisation (CGU)" lastUpdated="20 juin 2026">
            <p>
                Les présentes conditions générales d'utilisation (« CGU ») définissent les modalités
                d'accès et d'utilisation du site et du service Rekap (https://rekap.tech). Toute
                utilisation du Service implique l'acceptation pleine et entière des présentes CGU.
            </p>

            <h2>1. Accès au site et à la liste d'attente</h2>
            <p>
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à
                Internet. Tant que le Service n'est pas ouvert au public, l'utilisateur peut
                s'inscrire à la liste d'attente en communiquant son adresse e-mail professionnelle,
                afin d'être informé de l'ouverture des accès. Cette inscription n'emporte aucune
                obligation de souscription.
            </p>

            <h2>2. Compte utilisateur</h2>
            <p>
                L'accès aux fonctionnalités du Service nécessite la création d'un compte.
                L'utilisateur s'engage à fournir des informations exactes et à les maintenir à jour.
                Il est seul responsable de la préservation de la confidentialité de ses identifiants
                et de toute activité réalisée depuis son compte. Toute utilisation non autorisée
                doit être signalée sans délai à support@rekap.tech.
            </p>

            <h2>3. Usages autorisés</h2>
            <p>
                L'utilisateur s'engage à utiliser le Service conformément à sa destination, à la
                réglementation applicable et aux présentes CGU. Il garantit qu'il dispose des droits
                et autorisations nécessaires sur les données qu'il importe et traite via le Service,
                notamment celles relatives à ses propres clients.
            </p>

            <h2>4. Usages interdits</h2>
            <p>Il est notamment interdit à l'utilisateur de :</p>
            <ul>
                <li>
                    porter atteinte au fonctionnement, à la sécurité ou à l'intégrité du Service ;
                </li>
                <li>
                    accéder ou tenter d'accéder sans autorisation à des comptes ou systèmes tiers ;
                </li>
                <li>
                    importer ou diffuser des contenus illicites, diffamatoires, ou portant atteinte
                    aux droits de tiers ;
                </li>
                <li>utiliser le Service pour l'envoi de communications non sollicitées (spam) ;</li>
                <li>
                    extraire, reproduire ou exploiter le Service à des fins de revente ou de
                    développement d'un service concurrent.
                </li>
            </ul>

            <h2>5. Rôle de l'intelligence artificielle</h2>
            <LegalNote>
                Rekap génère des brouillons d'updates à l'aide de l'intelligence artificielle. Ces
                contenus constituent une aide à la rédaction : ils peuvent comporter des
                imprécisions et doivent impérativement être relus, corrigés et validés par
                l'utilisateur avant tout envoi. L'utilisateur demeure seul responsable du contenu
                qu'il envoie à ses clients.
            </LegalNote>

            <h2>6. Intégrations tierces</h2>
            <p>
                Le Service peut se connecter à des outils tiers (Asana, puis ClickUp et monday.com)
                à l'initiative de l'utilisateur. L'utilisation de ces outils est régie par les
                conditions de leurs éditeurs respectifs. Rekap n'est pas responsable de la
                disponibilité, du fonctionnement ou des modifications de ces services tiers.
            </p>

            <h2>7. Propriété intellectuelle</h2>
            <p>
                Le Service, sa marque, ses contenus et ses composants sont protégés par le droit de
                la propriété intellectuelle. Les présentes CGU ne confèrent qu'un droit d'usage
                personnel, non exclusif et non cessible, pour la durée d'utilisation du Service.
                L'utilisateur conserve la propriété des données et contenus qu'il importe.
            </p>

            <h2>8. Disponibilité, suspension et résiliation</h2>
            <p>
                Rekap s'efforce d'assurer la disponibilité du Service mais ne garantit ni son
                fonctionnement ininterrompu ni l'absence d'erreur. Rekap peut suspendre ou clôturer
                l'accès d'un utilisateur en cas de manquement aux présentes CGU, après information
                lorsque cela est possible.
            </p>

            <h2>9. Responsabilité</h2>
            <p>
                Le Service est fourni dans le cadre d'une obligation de moyens. Dans les limites
                autorisées par la loi, Rekap ne saurait être tenu responsable des dommages
                indirects, ni des conséquences d'un usage non conforme aux présentes CGU. Les
                conditions financières et la responsabilité applicables aux offres payantes sont
                précisées dans les <a href="/cgv">Conditions générales de vente</a>.
            </p>

            <h2>10. Données personnelles</h2>
            <p>
                Le traitement des données personnelles est décrit dans la{' '}
                <a href="/politique-de-confidentialite">Politique de confidentialité</a> et la{' '}
                <a href="/politique-cookies">Politique de cookies</a>.
            </p>

            <h2>11. Modification des CGU</h2>
            <p>
                Rekap peut modifier les présentes CGU à tout moment. La version applicable est celle
                en vigueur à la date d'utilisation du Service. La poursuite de l'utilisation vaut
                acceptation des CGU modifiées.
            </p>

            <h2>12. Droit applicable</h2>
            <p>
                Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux
                tribunaux français compétents, sous réserve des règles impératives applicables.
            </p>

            <h2>13. Contact</h2>
            <p>Pour toute question relative aux présentes CGU : support@rekap.tech.</p>
        </LegalLayout>
    );
};

export default CguPage;
