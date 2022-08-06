# Документація
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
// + https://www.web3d.org/x3d/content/examples/Basic/Shaders/FlutterIndex.html (недотягнутий проєкційний прікол)
// + https://uk.wikipedia.org/wiki/Китайська_кімната
// + https://uk.wikipedia.org/wiki/Синергія
// + https://uk.wikipedia.org/wiki/Мозаїка (Cauliflower mosaic virus)

?>
```
![This is an example](https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/screenshots/simply.png)
> (основна мета - сформувати нормальну <sup>[\\вікі](https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0%D0%BB%D1%96%D0%B7%D0%B0%D1%86%D1%96%D1%8F_%D0%B1%D0%B0%D0%B7_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85)</sup>і<sup>[інф.\/](https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0)</sup> зрозумілу, щонайменше для себе, базу знань [^1] яку потім можна буде використовувати для узгодженої з принципами[^2] розробки бота<sup>[\[пін-Див. також\]](https://pin.it/6IzISoe)</sup>"-[копілота](https://www.dota2.com/hero/gyrocopter?l=ukrainian)<sup>[\[вікі-Див. також\]](https://uk.wikipedia.org/wiki/GitHub_Copilot)</sup>" з адмінкою для затверджень<sup>[\[wiki-info\]](https://en.wikipedia.org/wiki/Proof_assistant)</sup> "солідних<sup>[\[вікі-інфо\]](https://uk.wikipedia.org/wiki/SOLID_(%D0%BE%D0%B1%27%D1%94%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D1%96%D1%94%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D0%BD%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F))</sup> класів<sup>[\[вікі-шаблон-форма\]](https://uk.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B0%D1%81_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F))</sup>"-алгоритмів надання конструктивних ```<?php echo new NullableMessagePoolObject('...'); ?>``` і не конструктивних ```<?php echo NullableMessagePoolObject::getMessageObject('...'); ?>``` відповідей-сигналів<sup>[\[вікі-примітка-позначення\]](https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B2%D0%B0)</sup> (можливо в форматі гіпермедіа<sup>[\[вікі-примітка\]](https://uk.wikipedia.org/wiki/HATEOAS)</sup>))
> 
> Примітки: 
> 1. Майте на увазі, родовий відмінок прикметника "конструктивний" містить натяк на метод доведення.
> 2. Цей абзац присвячується ДСТУ 3008-95.
> 
> [^1]: База знань — Вікіпедія. URL: https://uk.wikipedia.org/wiki/База_знань (дата звернення: 01.05.2022).
> [^2]: Web Platform Design Principles. URL: https://www.w3.org/TR/2021/NOTE-design-principles-20211216/ (дата звернення: 01.05.2022).

Гриф: [Чернетка](https://uk.wikipedia.org/wiki/Чернетка).

- [ ] git init
* Створення проекту
  * [git init](manual/DESC-GIT-INIT.md)



<p align="center">
<img width="420" src="https://raw.githubusercontent.com/nazar-chepliaka/ukr-git-documentation/main/assets/gif/image-animated-common-sources-of-data-2.50b02d8ac5369545fb03d2fa3d8c06f93e736e5d.gif">
</p>
