# jQuery Türkçe Büyük Harf Eklentisi
#### Turkish jQuery Upper Case Plugin

jQuery ile belirtilen etiketin içeriğini büyük harfe çevirir.
Ayrıca CSS3 ile kullanılan text-transform:uppercase; biçimi ile oluşan Büyük Harf hatalarını düzeltmek için kullanılabilir.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Z8Z2LXJ6H)

## Kullanımı - Usage

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="js/jquery.trUpperCase.js"></script>
    <script>
        $('h1').trUpperCase();
    </script>
    
## Temel Kullanım - Basic Usage

Aşağıdaki kodu kullanarak uc sınıfına sahip etiketlerin içeriğini büyük harfe çevirebilirsiniz.
With this usage you can convert tag's content to uppercase with "uc" class.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="js/jquery.trUpperCase.js"></script>
    
    
    <h1 class="uc"> Page Title </h1>
    <p> This is an <span class="uc">uppercase</span> text</p>
    
    
    <script>
        $(function() {
            $('.uc').trUpperCase();
        });
    </script>

### Örnek Kullanım - Example Usage

http://jsbin.com/izevas/2/edit

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FWebFikirleri%2FtrUpperCase&count_bg=%233D8FC8&title_bg=%23555555&icon=microsoftacademic.svg&icon_color=%23E7E7E7&title=VISITS&edge_flat=true)](https://hits.seeyoufarm.com)
