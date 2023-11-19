import React from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

import { useTranslations } from 'next-intl';

export default function Invite() {
  const t = useTranslations('Index.invite');

  return (
    <section className={style.invite}>
      <div className="container container-md">
        <div className={style.inviteRow}>
          <span className={style.title}>{t('title')}</span>
          <h2 className={style.subtitle}>{t('subtitle')}</h2>

          <article className={style.article}>
            <div className={style.articleText}>
              <p>{t('text')}</p>
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
                    {t('authorLabel')}:{' '}
                  </span>
                  <span
                    className={classNames(
                      style.articleTableCell,
                      style.articleTableValue
                    )}
                  >
                    {t('authorValue')}
                  </span>
                </div>

                <div className={style.articleTableRow}>
                  <span
                    className={classNames(
                      style.articleTableCell,
                      style.articleTableKey
                    )}
                  >
                    {t('dateLabel')}:{' '}
                  </span>
                  <span
                    className={classNames(
                      style.articleTableCell,
                      style.articleTableValue
                    )}
                  >
                    21.03.2019
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
                {t('timeZones')}:{' '}
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
                {t('naturalHeritage')}:{' '}
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
                {t('culturalHeritage')}:{' '}
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
                {t('natureReservers')}:{' '}
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
                {t('airports')}:{' '}
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
