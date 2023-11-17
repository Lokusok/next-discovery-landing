import React from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

export default function Invite() {
  return (
    <section className={style.invite}>
      <div className="container container-md">
        <div className={style.inviteRow}>
          <span className={style.title}>Чего мы там не видели?</span>
          <span className={style.subtitle}>
            Зачем путешествовать по своему дому
          </span>

          <article className={style.article}>
            <div className={style.articleText}>
              <p>
                По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но
                только 36% планируют провести отпуск в родной стране. Мол, чего
                мы тут, дома, не видели? На самом деле, Россия — это целая
                вселенная с ласковым морем юга, густыми лесами Саян и суровыми
                льдами плато Путорана. А ещё увидеть все эти красоты можно без
                миллионов на счету, загранпаспорта и многочасовых перелетов.
                Как, например, Вера Башмакова — смелая молодая мама, которая
                взяла в охапку троих детей, усадила их в свою «Ладу» и проехала
                20 тысяч километров по родной стране. Мы выбрали и описали
                некоторые интересные места, достойные вашего отпуска.
              </p>
            </div>

            <div>
              <div className={style.articleTable}>
                <div className={style.articleTableRow}>
                  <span
                    className={classNames(
                      style.articleTableCell,
                      style.articleTableKey
                    )}
                  >
                    Автор текста:{' '}
                  </span>
                  <span
                    className={classNames(
                      style.articleTableCell,
                      style.articleTableValue
                    )}
                  >
                    &lt;придумайте имя автора&gt;
                  </span>
                </div>

                <div className={style.articleTableRow}>
                  <span
                    className={classNames(
                      style.articleTableCell,
                      style.articleTableKey
                    )}
                  >
                    Дата:{' '}
                  </span>
                  <span
                    className={classNames(
                      style.articleTableCell,
                      style.articleTableValue
                    )}
                  >
                    &lt;впишите дату&gt;
                  </span>
                </div>
              </div>
            </div>
          </article>

          <div
            className={classNames(
              style.articleTable,
              style.articleTableAdditional,
              style.articleTableFzMd
            )}
          >
            <div className={style.articleTableRow}>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableKey
                )}
              >
                Часовых поясов:{' '}
              </span>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableValue
                )}
              >
                11
              </span>
            </div>

            <div className={style.articleTableRow}>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableKey
                )}
              >
                Объектов природного наследия ЮНЕСКО:{' '}
              </span>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableValue
                )}
              >
                12
              </span>
            </div>

            <div className={style.articleTableRow}>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableKey
                )}
              >
                Объектов культурного наследия ЮНЕСКО:{' '}
              </span>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableValue
                )}
              >
                16
              </span>
            </div>

            <div className={style.articleTableRow}>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableKey
                )}
              >
                Природных заповедников:{' '}
              </span>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableValue
                )}
              >
                105
              </span>
            </div>

            <div className={style.articleTableRow}>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableKey
                )}
              >
                Аэропортов:{' '}
              </span>
              <span
                className={classNames(
                  style.articleTableCell,
                  style.articleTableValue
                )}
              >
                241
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
