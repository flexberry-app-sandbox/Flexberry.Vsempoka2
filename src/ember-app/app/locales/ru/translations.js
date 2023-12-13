import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISVsempoka2ДокумПоставкиLForm from './forms/i-i-s-vsempoka2-докум-поставки-l';
import IISVsempoka2КлиентыLForm from './forms/i-i-s-vsempoka2-клиенты-l';
import IISVsempoka2ОрганизацияLForm from './forms/i-i-s-vsempoka2-организация-l';
import IISVsempoka2ПунктПогрузLForm from './forms/i-i-s-vsempoka2-пункт-погруз-l';
import IISVsempoka2ПунктПогрузкиLForm from './forms/i-i-s-vsempoka2-пункт-погрузки-l';
import IISVsempoka2СписокБаржLForm from './forms/i-i-s-vsempoka2-список-барж-l';
import IISVsempoka2СписокКонтейLForm from './forms/i-i-s-vsempoka2-список-контей-l';
import IISVsempoka2ТоварыLForm from './forms/i-i-s-vsempoka2-товары-l';
import IISVsempoka2ФормРезПостLForm from './forms/i-i-s-vsempoka2-форм-рез-пост-l';
import IISVsempoka2ФормирРаспредLForm from './forms/i-i-s-vsempoka2-формир-распред-l';
import IISVsempoka2ДокумПоставкиEForm from './forms/i-i-s-vsempoka2-докум-поставки-e';
import IISVsempoka2КлиентыEForm from './forms/i-i-s-vsempoka2-клиенты-e';
import IISVsempoka2ОрганизацияEForm from './forms/i-i-s-vsempoka2-организация-e';
import IISVsempoka2ПунктПогрузEForm from './forms/i-i-s-vsempoka2-пункт-погруз-e';
import IISVsempoka2ПунктПогрузкиEForm from './forms/i-i-s-vsempoka2-пункт-погрузки-e';
import IISVsempoka2СписокБаржEForm from './forms/i-i-s-vsempoka2-список-барж-e';
import IISVsempoka2СписокКонтейEForm from './forms/i-i-s-vsempoka2-список-контей-e';
import IISVsempoka2ТоварыEForm from './forms/i-i-s-vsempoka2-товары-e';
import IISVsempoka2ФормРезПостEForm from './forms/i-i-s-vsempoka2-форм-рез-пост-e';
import IISVsempoka2ФормирРаспредEForm from './forms/i-i-s-vsempoka2-формир-распред-e';
import IISVsempoka2ДокумПоставкиModel from './models/i-i-s-vsempoka2-докум-поставки';
import IISVsempoka2КлиентыModel from './models/i-i-s-vsempoka2-клиенты';
import IISVsempoka2ОрганизацияModel from './models/i-i-s-vsempoka2-организация';
import IISVsempoka2ПунктПогрузModel from './models/i-i-s-vsempoka2-пункт-погруз';
import IISVsempoka2ПунктПогрузкиModel from './models/i-i-s-vsempoka2-пункт-погрузки';
import IISVsempoka2СписокБаржModel from './models/i-i-s-vsempoka2-список-барж';
import IISVsempoka2СписокКонтейModel from './models/i-i-s-vsempoka2-список-контей';
import IISVsempoka2ТЧИнфОЗаказеModel from './models/i-i-s-vsempoka2-т-ч-инф-о-заказе';
import IISVsempoka2ТоварыModel from './models/i-i-s-vsempoka2-товары';
import IISVsempoka2ФормРезПостModel from './models/i-i-s-vsempoka2-форм-рез-пост';
import IISVsempoka2ФормирРаспредModel from './models/i-i-s-vsempoka2-формир-распред';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vsempoka2-докум-поставки': IISVsempoka2ДокумПоставкиModel,
    'i-i-s-vsempoka2-клиенты': IISVsempoka2КлиентыModel,
    'i-i-s-vsempoka2-организация': IISVsempoka2ОрганизацияModel,
    'i-i-s-vsempoka2-пункт-погруз': IISVsempoka2ПунктПогрузModel,
    'i-i-s-vsempoka2-пункт-погрузки': IISVsempoka2ПунктПогрузкиModel,
    'i-i-s-vsempoka2-список-барж': IISVsempoka2СписокБаржModel,
    'i-i-s-vsempoka2-список-контей': IISVsempoka2СписокКонтейModel,
    'i-i-s-vsempoka2-т-ч-инф-о-заказе': IISVsempoka2ТЧИнфОЗаказеModel,
    'i-i-s-vsempoka2-товары': IISVsempoka2ТоварыModel,
    'i-i-s-vsempoka2-форм-рез-пост': IISVsempoka2ФормРезПостModel,
    'i-i-s-vsempoka2-формир-распред': IISVsempoka2ФормирРаспредModel
  },

  'application-name': 'Vsempoka2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vsempoka2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vsempoka2',
          title: 'Vsempoka2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        vsempoka2: {
          caption: 'Vsempoka2',
          title: 'Vsempoka2',
          'i-i-s-vsempoka2-форм-рез-пост-l': {
            caption: 'Форм рез пост',
            title: ''
          },
          'i-i-s-vsempoka2-пункт-погруз-l': {
            caption: 'Пункт погруз',
            title: ''
          },
          'i-i-s-vsempoka2-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-vsempoka2-список-барж-l': {
            caption: 'Список барж',
            title: ''
          },
          'i-i-s-vsempoka2-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-vsempoka2-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-vsempoka2-докум-поставки-l': {
            caption: 'Докум поставки',
            title: ''
          },
          'i-i-s-vsempoka2-формир-распред-l': {
            caption: 'Формир распред',
            title: ''
          },
          'i-i-s-vsempoka2-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-vsempoka2-организация-l': {
            caption: 'Организация',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-vsempoka2-докум-поставки-l': IISVsempoka2ДокумПоставкиLForm,
    'i-i-s-vsempoka2-клиенты-l': IISVsempoka2КлиентыLForm,
    'i-i-s-vsempoka2-организация-l': IISVsempoka2ОрганизацияLForm,
    'i-i-s-vsempoka2-пункт-погруз-l': IISVsempoka2ПунктПогрузLForm,
    'i-i-s-vsempoka2-пункт-погрузки-l': IISVsempoka2ПунктПогрузкиLForm,
    'i-i-s-vsempoka2-список-барж-l': IISVsempoka2СписокБаржLForm,
    'i-i-s-vsempoka2-список-контей-l': IISVsempoka2СписокКонтейLForm,
    'i-i-s-vsempoka2-товары-l': IISVsempoka2ТоварыLForm,
    'i-i-s-vsempoka2-форм-рез-пост-l': IISVsempoka2ФормРезПостLForm,
    'i-i-s-vsempoka2-формир-распред-l': IISVsempoka2ФормирРаспредLForm,
    'i-i-s-vsempoka2-докум-поставки-e': IISVsempoka2ДокумПоставкиEForm,
    'i-i-s-vsempoka2-клиенты-e': IISVsempoka2КлиентыEForm,
    'i-i-s-vsempoka2-организация-e': IISVsempoka2ОрганизацияEForm,
    'i-i-s-vsempoka2-пункт-погруз-e': IISVsempoka2ПунктПогрузEForm,
    'i-i-s-vsempoka2-пункт-погрузки-e': IISVsempoka2ПунктПогрузкиEForm,
    'i-i-s-vsempoka2-список-барж-e': IISVsempoka2СписокБаржEForm,
    'i-i-s-vsempoka2-список-контей-e': IISVsempoka2СписокКонтейEForm,
    'i-i-s-vsempoka2-товары-e': IISVsempoka2ТоварыEForm,
    'i-i-s-vsempoka2-форм-рез-пост-e': IISVsempoka2ФормРезПостEForm,
    'i-i-s-vsempoka2-формир-распред-e': IISVsempoka2ФормирРаспредEForm
  },

});

export default translations;
