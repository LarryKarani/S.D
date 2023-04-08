import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const DEMO_DATA = [
  {
    name: "תיאור",
    content:
      "מוצרים שמייצר העסק הם שלטים מאלומיניום בהבלטה, המיועדים לשימוש במגוון תחומי שיווק, פרסום וסימון. השלטים מיוצרים בגדלים וגוונים שונים ומעוצבים באופן מודרני ואטרקטיבי על מנת לקדם מותגים ולהציג מידע לקהל הרחב.",
  },
  {
    name: "חומרי הגלם",
    content: `<ul class="list-disc list-inside leading-7">
    <li>שלטים שמייצר העסק עשויים מאלומיניום, חומר קל משקל וחזק, המתאים במיוחד לייצור שלטים עמידים ועמידים למזג האקלים השונה</li>
    <li>
    המוצרים עשויים מחומרים איכותיים ועמידים נוספים כמו דבק עמיד למים ועמיד לקרני UV, המסייעים להארכת חיי השימוש של השלטים ולשמירה על המראה המקצועי והאטרקטיבי שלהם. 
    </li>
    <li>
    השימוש בחומרים איכותיים ועמידים מבטיח ללקוחות של העסק מוצרים איכותיים ועמידים שיישארו יפים ומשמשים לאורך זמן.
    </li>
 
  </ul>`,
  },

  {
    name: "למה השלטים מתאימים",
    content:
      "מוצרים שמייצר העסק הם שלטים מאלומיניום בהבלטה, המיועדים לשימוש במגוון תחומי שיווק, פרסום וסימון. השלטים מיוצרים בגדלים וגוונים שונים ומעוצבים באופן מודרני ואטרקטיבי על מנת לקדם מותגים ולהציג מידע לקהל הרחב.",
  },
  {
    name: "שאלות נפוצות",
    content: `
    <ul class="list-disc list-inside leading-7">
    <li>שאלה: האם ניתן להזמין שלטים מותאמים אישית?
    תשובה: כן, אנו מספקים שירות מותאם אישית ומקצועי ליצירת שלטים באלומיניום בהבלטה מותאמים לצרכי הלקוחות שלנו.</li>
    <li>
    שאלה: מה המחיר של השלטים שלכם?
    תשובה: המחירים שלנו משתנים בהתאם לגודל, העיצוב, והכמות של השלטים המוזמנים. אנו מציעים מחירים תחרותיים ומצויידים בצוות מומחים המתאימים את המחירים לצרכי הלקוח.
    </li>
    <li>
    שאלה: איזה חומרים אתם משתמשים בייצור השלטים שלכם?
תשובה: אנו משתמשים במגוון חומרים איכותיים ועמידים כמו אלומיניום, דבק עמיד למים וקרני UV, ועוד. החומרים שאנו משתמשים בהם מבטיחים ללקוחות שלנו מוצרים איכותיים ועמידים.
    </li>
  
  </ul>
    `,
  },
];

interface Props {
  panelClassName?: string;
  data?: typeof DEMO_DATA;
}

const AccordionInfo: FC<Props> = ({
  panelClassName = "hebrew-text p-4 pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6",
  data = DEMO_DATA,
}) => {
  return (
    <div className="w-full rounded-2xl space-y-2.5">
      {/* ============ */}
      {data.map((item, index) => {
        return (
          <Disclosure key={index} defaultOpen={index < 2}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{item.name}</span>
                  {!open ? (
                    <PlusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <MinusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}

      {/* ============ */}
    </div>
  );
};

export default AccordionInfo;
