# Анота́ція (лат. annotatio — зауваження, помітка)

> (основна мета - сформувати нормальну <sup>[\\вікі](https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0%D0%BB%D1%96%D0%B7%D0%B0%D1%86%D1%96%D1%8F_%D0%B1%D0%B0%D0%B7_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85)</sup>і<sup>[інф.\/](https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0)</sup> зрозумілу, щонайменше для себе, базу знань [^1] яку потім можна буде використовувати для узгодженої з принципами[^2] розробки бота<sup>[\[пін-Див. також\]](https://pin.it/6IzISoe)</sup>"-[копілота](https://www.dota2.com/hero/gyrocopter?l=ukrainian)<sup>[\[вікі-Див. також\]](https://uk.wikipedia.org/wiki/GitHub_Copilot)</sup>" з адмінкою для затверджень<sup>[\[wiki-info\]](https://en.wikipedia.org/wiki/Proof_assistant)</sup> "солідних<sup>[\[вікі-інфо\]](https://uk.wikipedia.org/wiki/SOLID_(%D0%BE%D0%B1%27%D1%94%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D1%96%D1%94%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D0%BD%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F))</sup> класів<sup>[\[вікі-шаблон-форма\]](https://uk.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B0%D1%81_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F))</sup>"-алгоритмів надання конструктивних ```<?php echo new NullableMessagePoolObject('...'); ?>``` і не конструктивних ```<?php echo NullableMessagePoolObject::getMessageObject('...'); ?>``` відповідей-сигналів<sup>[\[вікі-примітка-позначення\]](https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B2%D0%B0)</sup> (можливо в форматі гіпермедіа<sup>[\[вікі-примітка\]](https://uk.wikipedia.org/wiki/HATEOAS)</sup>))
> 
> Примітки: 
> 1. Майте на увазі, родовий відмінок прикметника "конструктивний" містить натяк на метод доведення[*](https://en.wikipedia.org/wiki/Qualitative_comparative_analysis).
> 2. Цей абзац присвячується ДСТУ 3008-95.
> 3. [REST](https://uk.wikipedia.org/wiki/REST) (укр. відпочинок, нерухомість) — це архітектурний стиль для розподілених гіпертекстових систем.
> 
> [^1]: База знань — Вікіпедія. URL: https://uk.wikipedia.org/wiki/База_знань (дата звернення: 01.05.2022).
> [^2]: Web Platform Design Principles. URL: https://www.w3.org/TR/2021/NOTE-design-principles-20211216/ (дата звернення: 01.05.2022).

# Зміст документації

> Метою системи називають її бажаний майбутній стан.

```php
<?php

class NullableMessagePseudoPoolObject {
    private $output_str;
    private $container;
    private $objectCreator;

    public function __construct($input_str) {
        $this->output_str = '';
    }
    
    public function __get($prop_name) {
        if($prop_name == 'count') {
            return 0;
        } else {
            throw new Exception('Звернення до неіснуючої властивості.');
        }
    }

    public function __toString() {
        return $this->output_str;
    }

    public static function getMessageObject($input_str) {
        return new self($input_str);
    }
}

// inspired by "Електричне коло може перетворювати енергію, але потребує джерел для підзарядки." (https://en.wikipedia.org/wiki/Organic_unity)
// + https://youtu.be/cyFM2emjbQ8 (https://uk.wikipedia.org/wiki/Предметно-орієнтоване_проєктування)
// + https://youtu.be/rIaaH87z1-g #https://en.wikipedia.org/wiki/Data-driven
// + https://www.web3d.org/x3d/content/examples/Basic/Shaders/FlutterIndex.html (недотягнутий проєкційний прікол рівня https://uk.wikipedia.org/wiki/Вюпорт)
// + https://uk.wikipedia.org/wiki/Китайська_кімната
// + https://uk.wikipedia.org/wiki/Синергія
// + https://uk.wikipedia.org/wiki/Мозаїка (Cauliflower mosaic virus)

?>
```

> [Кіношно-серіально-коміксова contextual ad «NFT as art that is easy to follow up»](https://www.instagram.com/p/ChgeILwsrJD/)

![This is an example](https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/nft_ad/300245431_476381560637704_5357600223793359401_n.jpg)

Гриф: [Чернетка](https://uk.wikipedia.org/wiki/Чернетка).

- [ ] git init
* Створення проекту
  * [git init](manual/DESC-GIT-INIT.md)



<p>
<img title="https://en.wikipedia.org/wiki/IDEF6" alt="https://en.wikipedia.org/wiki/IDEF6" src="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/images/IIDEF4_Design_Activities.jpg">
</p>
