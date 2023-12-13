﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Vsempoka2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Докум поставки.
    /// </summary>
    // *** Start programmer edit section *** (ДокумПоставки CustomAttributes)

    // *** End programmer edit section *** (ДокумПоставки CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокумПоставкиE", new string[] {
            "Дата as \'Дата\'",
            "НомерДог as \'Номер дог\'",
            "Клиенты as \'Клиенты\'",
            "Клиенты.НаимЗаказа as \'Наим заказа\'",
            "Организация as \'Организация\'",
            "Организация.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Клиенты.НаимЗаказа",
            "Организация.Наименование"})]
    [AssociatedDetailViewAttribute("ДокумПоставкиE", "ТЧИнфОЗаказе", "ТЧИнфОЗаказеE", true, "", "Т ч инф о заказе", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ДокумПоставкиE", "Клиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимЗаказа")]
    [MasterViewDefineAttribute("ДокумПоставкиE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ДокумПоставкиL", new string[] {
            "Дата as \'Дата\'",
            "НомерДог as \'Номер дог\'",
            "Клиенты.НаимЗаказа as \'Наим заказа\'",
            "Организация.Наименование as \'Наименование\'"})]
    public class ДокумПоставки : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомерДог;
        
        private IIS.Vsempoka2.Клиенты fКлиенты;
        
        private IIS.Vsempoka2.Организация fОрганизация;
        
        private IIS.Vsempoka2.DetailArrayOfТЧИнфОЗаказе fТЧИнфОЗаказе;
        
        // *** Start programmer edit section *** (ДокумПоставки CustomMembers)

        // *** End programmer edit section *** (ДокумПоставки CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.Дата CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.Дата Get start)

                // *** End programmer edit section *** (ДокумПоставки.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ДокумПоставки.Дата Get end)

                // *** End programmer edit section *** (ДокумПоставки.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.Дата Set start)

                // *** End programmer edit section *** (ДокумПоставки.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ДокумПоставки.Дата Set end)

                // *** End programmer edit section *** (ДокумПоставки.Дата Set end)
            }
        }
        
        /// <summary>
        /// НомерДог.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.НомерДог CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.НомерДог CustomAttributes)
        public virtual int НомерДог
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.НомерДог Get start)

                // *** End programmer edit section *** (ДокумПоставки.НомерДог Get start)
                int result = this.fНомерДог;
                // *** Start programmer edit section *** (ДокумПоставки.НомерДог Get end)

                // *** End programmer edit section *** (ДокумПоставки.НомерДог Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.НомерДог Set start)

                // *** End programmer edit section *** (ДокумПоставки.НомерДог Set start)
                this.fНомерДог = value;
                // *** Start programmer edit section *** (ДокумПоставки.НомерДог Set end)

                // *** End programmer edit section *** (ДокумПоставки.НомерДог Set end)
            }
        }
        
        /// <summary>
        /// Докум поставки.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.Клиенты CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Vsempoka2.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.Клиенты Get start)

                // *** End programmer edit section *** (ДокумПоставки.Клиенты Get start)
                IIS.Vsempoka2.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (ДокумПоставки.Клиенты Get end)

                // *** End programmer edit section *** (ДокумПоставки.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.Клиенты Set start)

                // *** End programmer edit section *** (ДокумПоставки.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (ДокумПоставки.Клиенты Set end)

                // *** End programmer edit section *** (ДокумПоставки.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Докум поставки.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.Организация CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Vsempoka2.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.Организация Get start)

                // *** End programmer edit section *** (ДокумПоставки.Организация Get start)
                IIS.Vsempoka2.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (ДокумПоставки.Организация Get end)

                // *** End programmer edit section *** (ДокумПоставки.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.Организация Set start)

                // *** End programmer edit section *** (ДокумПоставки.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (ДокумПоставки.Организация Set end)

                // *** End programmer edit section *** (ДокумПоставки.Организация Set end)
            }
        }
        
        /// <summary>
        /// Докум поставки.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе CustomAttributes)
        public virtual IIS.Vsempoka2.DetailArrayOfТЧИнфОЗаказе ТЧИнфОЗаказе
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе Get start)

                // *** End programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе Get start)
                if ((this.fТЧИнфОЗаказе == null))
                {
                    this.fТЧИнфОЗаказе = new IIS.Vsempoka2.DetailArrayOfТЧИнфОЗаказе(this);
                }
                IIS.Vsempoka2.DetailArrayOfТЧИнфОЗаказе result = this.fТЧИнфОЗаказе;
                // *** Start programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе Get end)

                // *** End programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе Set start)

                // *** End programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе Set start)
                this.fТЧИнфОЗаказе = value;
                // *** Start programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе Set end)

                // *** End programmer edit section *** (ДокумПоставки.ТЧИнфОЗаказе Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокумПоставкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокумПоставкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокумПоставкиE", typeof(IIS.Vsempoka2.ДокумПоставки));
                }
            }
            
            /// <summary>
            /// "ДокумПоставкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокумПоставкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокумПоставкиL", typeof(IIS.Vsempoka2.ДокумПоставки));
                }
            }
        }
    }
}
