#jQuery Türkçe Büyük Harf Eklentisi
####Turkish jQuery Upper Case Plugin

jQuery ile belirtilen etiketin içeriğini büyük harfe çevirir.
Ayrıca CSS3 ile kullanılan text-transform:uppercase; biçimi ile oluşan Büyük Harf hatalarını düzeltmek için kullanılabilir.

##Kullanımı - Usage

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="js/jquery.trUpperCase.js"></script>
    <script>
        $('h1').trUpperCase();
    </script>
    
##Temel Kullanım - Basic Usage

Aşağıdaki kodu kullanarak uc sınıfına sahip etiketlerin içeriğini büyük harfe çevirebilirsiniz.
With this usage you can convert tag's content to uppercase with "uc" class.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="js/jquery.trUpperCase.js"></script>
    
    <!-- body -->
    
    <h1 class="uc"> Page Title </h1>
    <p> This is an <span class="uc">uppercase</span> text</p>
    
    <!-- body ends -->
    
    <script>
        $('h1').trUpperCase();
    </script>

###Örnek Kullanım - Example Usage

http://jsbin.com/izevas/2/edit
